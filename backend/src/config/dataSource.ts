import { DataSource } from "typeorm";
import { User } from "../models/user.entity";
import { Enterprise } from "../models/enterprise.entity";
import { Employee } from "../models/employee.entity";
import 'dotenv/config'

function GetEnv(key: string): string {
    return process.env[key]!
}

export const bbdd = new DataSource({
    type: "mysql",
    host: GetEnv("DB_HOST"),
    port: Number(GetEnv("DB_PORT")),
    username: GetEnv("DB_USER"),
    password: GetEnv("DB_PASS"),
    database: GetEnv("DB_NAME"),
    synchronize: true,
    logger: "simple-console",
    logging: true,
    entities: [User, Enterprise, Employee]
})