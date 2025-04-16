import dotenv from "dotenv"
import pkg from "pg";

dotenv.config();
const { Client } = pkg;

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});

client.connect()
    .then(() => console.log("Connected to PosgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

export default client;