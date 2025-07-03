import express from "express";
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let totalRequests = 0;
const maxRequests = 50;
const resetInterval = 60 * 60 * 1000;

setInterval(() => {
    totalRequests = 0;
}, resetInterval);


router.post("/chat", async (req, res) => {

    if (totalRequests >= maxRequests) {
        return res.status(429).json({
            error: "Servern har tagit emot för många förfrågningar – försök igen senare."
        });
    }

    totalRequests++;

    const { message } = req.body;
    console.log("Message: " + message)

    if (typeof message !== "string" || message.trim() === "") {
        return res.status(400).json({ error: "Ogiltigt meddelande" });
    }

    if (message.length > 50) {
        console.log("Skrev för långt meddelande")
        return res.status(400).json({ error: "Meddelandet får max vara 50 tecken långt." });
    }

    try {
        const result = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            max_tokens: 100,
            messages: [
                { "role": "user", "content": message },
            ],
        });

        console.log(result)
        const reply = result.choices[0].message || "Could not get a response from the AI"
        res.json({ reply: reply.content });
    } catch (e) {
        console.log("Error", e)
        res.json({ error: e })
    }


})

export default router;