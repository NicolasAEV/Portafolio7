import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Producto  = sequelize.define('Producto',{
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
    nombre_producto :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    precio :{
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stock : {
        type : DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notEmpty: true
        }
    },
    imagen :{
        type : DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descripcion : {
        type : DataTypes.STRING(200),
        validate: {
            notEmpty: true
        }
    },
    fecha : {
        type : DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Producto',
    alias : 'Producto'
  })


