import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'



export const Cliente  = sequelize.define('Cliente',{
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
    nombre_cliente :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    fecha_nacimiento : {
        type : DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    contraseña :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email : {
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    rut :{ 
        type : DataTypes.STRING(13),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

},{
    timestamps: false,
    tableName : 'Cliente',
    alias : 'Cliente'

  })


