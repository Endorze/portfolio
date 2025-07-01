import express from "express";
import fetch from "node-fetch";
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {

    const { message } = req.body;
    console.log("Message: " + message)

    try {
        const result = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
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