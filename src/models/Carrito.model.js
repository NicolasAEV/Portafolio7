import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Carrito  = sequelize.define('Carrito',{
    id :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
    ,
    id_cliente :{
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Carrito',
    alias : 'Carrito'
  })

