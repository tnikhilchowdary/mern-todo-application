import express from "express";
import dotenv from "dotenv";
import connect from "./database/connectDb.js";
import todoRouter from "./routers/todoRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
connect();
app.use("/todo", todoRouter);
app.get("/", (req, res) => {
    res.send("NodeJs Running");
})


app.listen(process.env.PORT, () => {
    console.log(`server is running on local:${process.env.PORT}`);
})