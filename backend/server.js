import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import client from "./db.js";
import contactForm from "./routes/contactForm.js"
import account from "./routes/account.js"
import chat from "./routes/chat.js"
import path from "path";
import { fileURLToPath } from "url";
import flyway from "./flyway.js"
import { rateLimit } from 'express-rate-limit'

flyway.migrate()
dotenv.config();

const app = express();


const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 60 minutes
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 60 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: {
        error: "To many messages sent from this IP-Adress"
    }
})

// Apply the rate limiting middleware to chat requests.
app.use("/api/chat", limiter)

const corsOptions = {
    origin: ['http://localhost:5173', 'http://endorze.org']
}

app.use(cors(corsOptions))
app.use(express.json());

app.use("/api", contactForm);
app.use("/api", account)
app.use("/api", chat)

app.get('/get-numbers', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM test');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Serverfel");
    }
  });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});


app.listen("8080", () => {
    console.log("Server started on port 8080")
})