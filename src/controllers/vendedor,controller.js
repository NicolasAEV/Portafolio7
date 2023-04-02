
import {Vendedor} from  '../models/Vendedor.model.js'
import { sequelize } from '../db/db.js'



export const getVendedorForValidation = async (email,password) =>{
        let Vendedor = await Vendedor.findOne({
            raw:true,
            where : {
                email : email , contraseña : password
         } })
         return Vendedor;
}
