import express from "express";
import morgan from "morgan";
import cors from 'cors';

const app = express();
const port = 3030

app.use(morgan('dev'))
app.use(cors())

app.get("/", (_req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`Server in port: ${port}`)
})