import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Detalle_carrito  = sequelize.define('Detalle_carrito',{
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
    cantidad : {
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    // ,
    // id_producto :{
    //     type : DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // }, 
    // id_carrito :{
    //     type : DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // }
},{
    timestamps: false,
    tableName : 'Detalle_carrito',
    alias : 'Detalle'

  })


