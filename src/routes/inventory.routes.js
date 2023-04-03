import { Router } from 'express';
const router = Router()
import {addProductInventory,deleteProduct,updateProduct,getProducts} from '../controllers/products.controllers.js'
import { verificarTokenVendedor } from '../middleware/jwt-vendedor.js';

//obtenemos todos los productos
router.get("/api/inventario",verificarTokenVendedor,getProducts, (req, res) => {})
//agregamos un producto
    .post("/api/inventario",verificarTokenVendedor,addProductInventory,(req, res) => {})
//actualizamos un producto
    .put("/api/inventario",verificarTokenVendedor,updateProduct,(req, res) => {})
//eliminamos un producto
    .delete("/api/inventario/:id",verificarTokenVendedor,deleteProduct,(req, res) => {})
    
export default router;


