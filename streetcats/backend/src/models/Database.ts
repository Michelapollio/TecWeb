import { Sequelize } from 'sequelize';
import { createModel as createUserModel } from "./User.js"

import 'dotenv/config';

export const database = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
    host: process.env.DB_HOST!,
    dialect: 'postgres'
});

createUserModel(database);

export const { User } = database.models;
//sync schema
database.sync().then(() => {
    console.log("Database synchronized successfully");
}).catch((err) => {
    console.error("Error synchronizing database:", err);
});

