
import { Router } from 'express';
const router = Router();
import { createOrden } from '../controllers/ventas.controllers.js';
import { getVentas } from '../controllers/views.controllers.js';
import { verificarTokenCliente } from '../middleware/jwt.js';
router.get("/api/ventas",verificarTokenCliente,getVentas, (req, res) => {})
.post("/api/ventas",verificarTokenCliente,createOrden ,(req, res) => {})

//add product to cart

export default router;