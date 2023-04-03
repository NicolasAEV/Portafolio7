import {Cliente} from  '../models/Cliente.model.js'
import { sequelize } from '../db/db.js'
import { Op } from 'sequelize';


export const getClienteForValidation = async (email,password) =>{
        let cliente = await Cliente.findOne({
            raw:true,
            attributes :['id', 'nombre_cliente' ,'email'],
            where : {
                email : email , contraseña : password
         } })
         return cliente;
}

export const registrarCliente = async (req,res) =>{
    try {
    let {nombre , fecha , password,email,rut} = req.body
    let clienteEmail = await Cliente.findOne({
        raw : true,
        where : {
            email : email
        }})
    
    if(clienteEmail > 0){
        res.status(500).json({code : 500 , message : 'el email ya se encuetra registrado'})

    }else{
     await Cliente.create({nombre_cliente : nombre,fecha_nacimiento:fecha,contraseña:password,email:email,rut:rut})
    res.status(200).json({code : 200 , message : 'usuario creado'})
    }
    } catch (error) {
        console.log(error.stack)
        res.status(500).json({code : 500 , message : 'ha ocurrido un error al iniciar sesion'})
    }
}