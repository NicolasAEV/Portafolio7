
import {Vendedor} from  '../models/Vendedor.model.js'
import { sequelize } from '../db/db.js'
import { Op } from 'sequelize';


export const getVendedorForValidation = async (rut,password) =>{
        let vendedor = await Vendedor.findOne({
            raw:true,
            attributes : ['id','rut','nombre_vendedor'],
            where : {
                rut : rut , contraseña : password
         } })
         return vendedor;
}
