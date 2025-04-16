import express from "express";
import cors from "cors";
import client from "./db.js";
import contactForm from "./routes/contactForm.js"
import account from "./routes/account.js"
import path from "path";
import { fileURLToPath } from "url";
import flyway from "./flyway.js"

flyway.migrate()

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))
app.use(express.json());


//Testade med postman, siffra läggs till korrekt i databasen.
app.post("/add-number", async (req, res) => {
    try {
        const { number } = req.body;
        await client.query(`INSERT INTO test (id) values ($1)`, [number])
        res.json({ message: 'Nummer har lagts till!' });
    } catch (err) {
        console.error(err);
        res.status(500).send("Serverfel");
    }
})

app.use("/api", contactForm);
app.use("/api", account)

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