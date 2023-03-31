import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Cupon  = sequelize.define('Cupon',{
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
    cupon :{
        type : DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nombre_cupon : {
        type : DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Cupon',
    alias : 'cupon'
  })


