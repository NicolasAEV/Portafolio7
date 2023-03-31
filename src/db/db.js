import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize}  from "sequelize";

    const DB_DATABASE = process.env.DB_DATABASE;
    const DB_USER = process.env.DB_USER;
    const DB_HOST = process.env.DB_HOST;
    const DB_PASSWORD = process.env.DB_PASSWORD;

export const sequelize  = new Sequelize (DB_DATABASE,DB_USER,DB_PASSWORD,{
    host :DB_HOST,
    dialect:'postgres',
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized : false
        }
    }
})

    