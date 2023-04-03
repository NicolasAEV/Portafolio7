import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Detalle_orden  = sequelize.define('Detalle_orden',{
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
    precio :{
        type : DataTypes.INTEGER,
        allowNull: false,
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
},{
    timestamps: false,
    tableName : 'Detalle_orden',
    Alias : 'DetalleOrden'

  })


