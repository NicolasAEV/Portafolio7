import express from 'express'
const router = express.Router()

import { addProductCart ,deleteProductCart,deleteProductCartALL,getCarrito} from '../controllers/carrito.controllers.js';

router.get('/api/carrito',getCarrito, (req,res) =>{})
        .post('/api/carrito',addProductCart,(req,res)=>{})
        .delete('/api/carrito/:id',deleteProductCart,(req,res)=>{})
router.delete('/api/v1/carrito/:id',deleteProductCartALL,(req,res)=>{})

router.get("/api/carrito/:id",addProductCart, (req, res) => {})

export default router;