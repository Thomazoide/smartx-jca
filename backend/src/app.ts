import express from "express";
import morgan from "morgan";
import cors from 'cors';
import 'reflect-metadata'

const app = express();
const port = process.env["SV_PORT"]

app.use(morgan('dev'))
app.use(cors())

app.get("/", (_req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`Server in port: ${port}`)
})