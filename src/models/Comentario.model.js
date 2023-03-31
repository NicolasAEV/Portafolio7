import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Comentario  = sequelize.define('Comentario',{
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
    detalles :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    puntaje : {
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    // ,
    // id_cliente :{
    //     type : DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // }
},{
    timestamps: false,
    tableName : 'Comentario',
    alias : 'Comentario'

  })


