import express from "express";
import client from "../db.js";
import dotenv from "dotenv";
import axios from "axios";

const router = express.Router();

const createUser = async (username, password, email) => {
    try {
        const checkUser = await client.query(`SELECT id FROM login_details WHERE username = $1 OR email = $2`, [username, email])
        
        if (checkUser.rows.length > 0) {
            return {success: false, message: "Användare eller E-post existerar redan"};
        }

        await client.query(`INSERT INTO login_details (username, password, email) VALUES ($1, $2, $3)`, [username, password, email]);
        return { success: true, message: "Nytt konto skapat!"}
    } catch (err) {
        return { success: false, message: "Något gick fel vid försök att skapa konto"}
    }
}

router.post("/create-account", async (req, res) => {

    console.log("Server mottog data: ", req.body)

    try {
        const {username, email, password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({error: "Uppgav inte alla uppgifter vid skapande av konto"})
        } 

        console.log("Innan användare skapas")
    const result = await createUser(username, password, email);
    
    console.log("Efter användare skapas")

    if (!result.success) {
        return res.status(400).json({error: result.message})
    }

    return res.json({message: result.message});

    } catch(err) {
        console.error("Fel vid skapande av konto", err);
        return res.status(500).json({error: "Serverfel vid kontoskapandet"})
    }
})

export default router;