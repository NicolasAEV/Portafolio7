import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize}  from "sequelize";

    const DB_DATABASE = process.env.PGDATABASE;
    const DB_USER = process.env.PGUSER;
    const DB_HOST = process.env.PGHOST;
    const DB_PASSWORD = process.env.PGPASSWORD;

export const sequelize  = new Sequelize ("railway","postgres","WipzFFeUQUVPkHxB7pbr",{
    host :"containers-us-west-32.railway.app",
    dialect:"postgres",
    port : 7789
 
})

    