import { Router } from 'express';
const router = Router()
import {emisionTokenCliente} from '../middleware/jwt.js'
import {registrarCliente} from '../controllers/cliente.controllers.js'
import { emisionTokenVendedor } from '../middleware/jwt-vendedor.js';
//rutas api login cliente
router.post('/api/login',emisionTokenCliente,(req,res)=>{})
router.post('/api/regitro',registrarCliente ,(req,res)=>{})
//rutas api login vendedor
router.post('/api/login/admin',emisionTokenVendedor,(req,res)=>{})
export default router