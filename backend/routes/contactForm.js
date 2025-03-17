import express from "express"
import nodemailer from "nodemailer";
import client from "../db.js"
import dotenv from "dotenv";
import axios from "axios";

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
        console.log("Data mottaget i backend: ", req.body);
        console.log("Recaptha token: ", req.body.recaptchaToken)
        const { name, lastName, email, message, recaptchaToken } = req.body;

        if (!email || !message || email.trim() === "" || message.trim() === "" || !recaptchaToken) {
            return res.status(400).json({ error: "Meddelande eller Email saknas." })
        }

        const response = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            null,
            {
                params: {
                    secret: process.env.RECAPTCHA_SECRET,
                    response: recaptchaToken
                }
            }
        );

        console.log("🔍 Google reCAPTCHA API-svar:", response.data);


        if (!response.data.success) {
            return res.status(400).json({ error: "reCAPTCHA validering misslyckades." });
        }

        await client.query(`INSERT INTO contact_form (first_name, last_name, email, message_text) VALUES ($1, $2, $3, $4)`, [name || null, lastName || null, email, message]);

        await sendEmail({ name, lastName, email, message });

        res.json({ message: "Ditt meddelande har skickats!" })
    } catch (err) {
        console.error("Databas Error: ", err);
        res.status(500).send("Serverfel vid lagring av meddelande")
    }
})

export default router;