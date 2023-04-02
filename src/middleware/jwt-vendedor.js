
import { getClienteForValidation } from '../controllers/cliente.controllers.js';
const SECRETO = "987654321";
import jwt from 'jsonwebtoken';
export const verificarTokenVendedor = (req, res, next) => {

    let token;
    let tokenQuery = req.query.token;
    console.log(tokenQuery)
    if(tokenQuery) token = tokenQuery;
    let tokenHeader = req.headers['authorization'];

    if(tokenHeader){
        tokenHeader = tokenHeader.split(" ");
        tokenHeader = tokenHeader[1];
        token = tokenHeader;
    }
    if(token){
        jwt.verify(token, SECRETO, (error, data) => {
            if(error) return res.status(401).json({code:401, message:"Token no válido."})
            req.vendedor = data.vendedor
            next();
        })
    }else{
        return res.status(401).json({code:401, message:"Debe proporcionar un token."})
    }
}

export const emisionTokenVendedor = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        console.log(email,password)
        getVendedorForValidation(email, password)
        .then(vendedor => {
            console.log(vendedor)
            if(vendedor == undefined) return res.status(401).json({code: 401, message: "Pruebe intentando otra vez"})
            let tokenKey
            jwt.sign({vendedor}, SECRETO, (err, token) => {
                if(err){
                    res.status(500).json({code: 500, message: "No se pudo emitir un token"})
                }else{
                    tokenKey = token;
                    res.status(200).json({code: 200, token: tokenKey})
                }
            })
        }).catch(error => {
            console.log(error)
            res.status(500).json({code: 500, message: "Error del servidor"})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({code: 500, message: "error interno del servidor"})
    }
}