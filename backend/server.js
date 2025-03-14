import express from "express";
import cors from "cors";
import client from "./db.js";
import contactForm from "./routes/contactForm.js"

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

app.get('/get-numbers', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM test');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Serverfel");
    }
  });

app.get("/", (req, res) => {
    res.json({
        blogPost: [
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
            {
                title: "The journey of a Thousand Miles",
                content: "An exploration of the importance of taking the first step in any journey.",
            },
        ]
    })
})

app.listen("8080", () => {
    console.log("Server started on port 8080")
})