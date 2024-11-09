import express from "express";
import morgan from "morgan";
import cors from 'cors';
import 'reflect-metadata'
import { bbdd } from "./config/dataSource";
import { userRouter } from "./routes/user.routes";
import { enterpriseRouter } from "./routes/enterprise.routes";
import { employeeRouter } from "./routes/employee.routes";
import 'dotenv/config'

const app = express();
const port = process.env["SV_PORT"]

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/enterprises', enterpriseRouter)
app.use('/api/employees', employeeRouter)

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

