import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Categories } from "./entity/Categories"
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.PORT),
    username: process.env.DB_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Categories],
    migrations: [],
    subscribers: [],
})
