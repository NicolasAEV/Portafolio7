
import { Router } from 'express';
const router = Router();
import { createOrden } from '../controllers/ventas.controllers.js';
import { getVentas } from '../controllers/views.controllers.js';

router.get("/api/ventas",getVentas, (req, res) => {})
.post("/api/ventas",createOrden ,(req, res) => {})

//add product to cart

export default router;