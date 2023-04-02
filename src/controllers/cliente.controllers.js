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
    let {nombre , fecha , password,email,rut} = req.body
    console.log(nombre, fecha , password,email,rut)
   
    let clienteEmail = await Cliente.findOne({
        raw : true,
        where : {
            email : email
        }})
        console.log(clienteEmail)
    if(clienteEmail > 0){
        res.status(500).json({code : 500 , message : 'el email ya se encuetra registrado'})

    }else{
        console.log('estamos aqui')
     await Cliente.create({nombre_cliente : nombre,fecha_nacimiento:fecha,contraseña:password,email:email,rut:rut})
        console.log('hemos creado el cliente')
        res.status(200).json({code : 200 , message : 'usuario creado'})

    }
    } catch (error) {
        console.log(error.stack)
        res.status(500).json({code : 500 , message : 'ha ocurrido un error al iniciar sesion'})
    }

}