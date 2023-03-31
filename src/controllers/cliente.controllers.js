import {Cliente} from  '../models/Cliente.model.js'
import { sequelize } from '../db/db.js'



export const getClienteForValidation = async (email,password) =>{
        let cliente = await Cliente.findOne({
            raw:true,
            where : {
                email : email , contraseña : password
         } })
         return cliente;
}
export const registrarCliente = async (req,res) =>{
    try {
    let {nombre_cliente , fecha , contraseña,email,rut} = req.body
    let clienteEmail = await Cliente.findOne({
        raw : true,
        where : {
            email : email
        }})
    if(clienteEmail){
        res.status(500).json({code : 500 , message : 'el email ya se encuetra registrado'})

    }else{

        await Cliente.create({nombre_cliente,fecha,contraseña,email,rut})

        res.status(200).json({code : 200 , message : 'usuario creado'})

    }
    } catch (error) {
        res.status(500).json({code : 500 , message : 'ha ocurrido un error al iniciar sesion'})
    }

}