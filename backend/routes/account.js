import express from "express";
import client from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = express.Router();

const createUser = async (username, password, email) => {
    try {
        const checkUser = await client.query(`SELECT id FROM login_details WHERE username = $1 OR email = $2`, [username, email])

        if (checkUser.rows.length > 0) {
            return { success: false, message: "Användare eller E-post existerar redan" };
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await client.query(`INSERT INTO login_details (username, password, email) VALUES ($1, $2, $3)`,
            [username, hashedPassword, email]);
        return { success: true, message: "Nytt konto skapat!" }
    } catch (err) {
        return { success: false, message: "Något gick fel vid försök att skapa konto" }
    }
}

router.post("/create-account", async (req, res) => {

    console.log("Server mottog data: ", req.body)

    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: "Uppgav inte alla uppgifter vid skapande av konto" })
        }

        console.log("Innan användare skapas")
        const result = await createUser(username, password, email);

        console.log("Efter användare skapas")

        if (!result.success) {
            return res.status(400).json({ error: result.message })
        }

        return res.json({ message: result.message });

    } catch (err) {
        console.error("Fel vid skapande av konto", err);
        return res.status(500).json({ error: "Serverfel vid kontoskapandet" })
    }
});

const fetchUser = async (email, password) => {

    try {
    const result = await client.query(`SELECT id, username, password FROM login_details WHERE email = $1`, [email]);
    if (result.rows.length === 0) {
        return { success: false, message: "Felaktig e-post eller lösenord" };
    }

    const hashedPassword = result.rows[0].password;
    const comparePassword = await bcrypt.compare(password, hashedPassword);

    if (!comparePassword) {
        return { success: false, message: "Felaktig e-post eller lösenord" };
    }

    const token = jwt.sign(
        { id: result.rows[0].id, username: result.rows[0].username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
    return { success: true, message: "Inloggning lyckades!", token };
    } catch (err) {
        return { success: false, message: "Serverfel vid inloggning" };
    }
}

router.post("/login", async (req, res) => {

    try {
        const { password, email } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Lösenord eller Användarnamn saknas." })
        }

        const result = await fetchUser(email, password)

        if (!result.success) {
            return res.status(400).json({ error: result.message });
        }

        return res.json({ message: result.message, token: result.token });

    } catch (err) {
        return res.status(500).json({ error: "Serverfel vid försök att logga in" })
    }
})

export default router;