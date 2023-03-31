import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Descuento  = sequelize.define('Descuento',{
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
    nombre :{
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    por_descuento : {
        type : DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Descuento',
    alias : 'Descuento'

  })


