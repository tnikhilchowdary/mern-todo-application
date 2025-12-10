import express from "express";
import dotenv from "dotenv";
import connect from "./database/connectDb.js";

dotenv.config();

const app = express();

app.use(express.json());
connect();

app.get("/", (req, res) => {
    res.send("NodeJs Running");
})


app.listen(process.env.PORT, () => {
    console.log(`server is running on local:${process.env.PORT}`);
})