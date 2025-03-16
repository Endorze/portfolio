import express from "express"
import nodemailer from "nodemailer";
import client from "../db.js"
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendEmail = async (formData) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Meddelande från Portfolio hemsida",
        text: `Du har fått ett nytt meddelande:\n\nNamn: ${formData.name} ${formData.lastName}\nEmail: ${formData.email}\nMeddelande:\n${formData.message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email skickad!")
    } catch (err) {
        console.error("Fel vid mailutskick: ", err);
    }
};


router.post("/send-form", async (req, res) => {
    try {
        const { name, lastName, email, message } = req.body;
        if (!email || !message || email.trim() === "" || message.trim() === "") {
            return res.status(400).json({ error: "Meddelande eller Email saknas." })
        }

        await client.query(`INSERT INTO contact_form (first_name, last_name, email, message_text) VALUES ($1, $2, $3, $4)`, [name || null, lastName || null, email, message]);
        
        await sendEmail({name, lastName, email, message});

        res.json({message: "Ditt meddelande har skickats!"})
    } catch (err) {
        console.error("Databas Error: ", err);
        res.status(500).send("Serverfel vid lagring av meddelande")
    }
})

export default router;