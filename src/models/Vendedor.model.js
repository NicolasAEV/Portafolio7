import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Vendedor  = sequelize.define('Vendedor',{
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
    nombre_vendedor :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    contraseña :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rut : {
        type : DataTypes.STRING(13),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Vendedor',
    alias : 'Vendedor'

  })



