import express from "express"
import client from "../db.js"

const router = express.Router();

router.post("/send-form", async (req, res) => {
    try {
        const { name, lastName, email, message } = req.body;
        if (!email || !message || email.trim() === "" || message.trim() === "") {
            return res.status(400).json({ error: "Meddelande eller Email saknas." })
        }

        await client.query(`INSERT INTO contact_form (first_name, last_name, email, message_text) VALUES ($1, $2, $3, $4)`, [name || null, lastName || null, email, message]);
        res.json({message: "Ditt meddelande har skickats!"})
    } catch (err) {
        console.error("Databas Error: ", err);
        res.status(500).send("Serverfel vid lagring av meddelande")
    }
})

export default router;