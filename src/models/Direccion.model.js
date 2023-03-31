import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Direccion  = sequelize.define('Direccion',{
    id :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    region : {
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    ciudad :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    calle :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
   
},{
    timestamps: false,
    tableName : 'Direccion',
    alias : 'Direccion'
  })


