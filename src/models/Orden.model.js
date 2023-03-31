import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Orden  = sequelize.define('Orden',{
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
    fecha : {
        type : DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    tipo_boleta :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    medio_pago :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    // ,
    // id_estado :{
    //     type : DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // }, 
    // id_cliente :{
    //     type : DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // },  
    // id_cupon :{
    //     type : DataTypes.INTEGER,
    //     allowNull: true,
    //     validate: {
    //         notEmpty: true
    //     }
    // }
},{
    timestamps: false,
    tableName : 'Orden',
    alias : 'Orden'


  })


