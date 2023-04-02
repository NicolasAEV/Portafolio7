import express from 'express'
const router = express.Router()

import { addProductCart ,deleteProductCart,deleteProductCartALL,getCarrito} from '../controllers/carrito.controllers.js';
import { verificarTokenCliente } from '../middleware/jwt.js';

router.get('/api/carrito',verificarTokenCliente,getCarrito, (req,res) =>{})
        .post('/api/carrito',verificarTokenCliente,addProductCart,(req,res)=>{})
        .delete('/api/carrito/:id',verificarTokenCliente,deleteProductCart,(req,res)=>{})
router.delete('/api/v1/carrito/:id',verificarTokenCliente,deleteProductCartALL,(req,res)=>{})

router.get("/api/carrito/:id",verificarTokenCliente,addProductCart, (req, res) => {})

export default router;