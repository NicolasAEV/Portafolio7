import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize}  from "sequelize";

    const DB_DATABASE = process.env.PGDATABASE;
    const DB_USER = process.env.PGUSER;
    const DB_HOST = process.env.PGHOST;
    const DB_PASSWORD = process.env.PGPASSWORD;
    const DB_PORT = process.env.PGPORT;

export const sequelize  = new Sequelize (DB_DATABASE,DB_USER,DB_PASSWORD,{
    host :DB_HOST,
    dialect:"postgres",
    port : DB_PORT,

})