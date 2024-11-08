import express from "express";
import morgan from "morgan";
import cors from 'cors';
import 'reflect-metadata'
import { bbdd } from "./config/dataSource";

const app = express();
const port = process.env["SV_PORT"]

app.use(morgan('dev'))
app.use(cors())

app.get("/", (_req, res) => {
    res.send("Hello world!")
})

bbdd.initialize()
    .then( () => {
        console.log("BBDD conectada...")
        app.listen(port, () => {
            console.log(`Server in port: ${port}`)
        })
    } )
    .catch( (err) => {
        console.log("Error al conectar base de datos",  err)
    } )

