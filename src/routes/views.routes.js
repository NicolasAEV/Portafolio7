import { Router } from 'express';
const router = Router();
import { getProductsHome,getAllproducts ,getProductsInventario,getProductsById,getDetailsById,getProuctsCarrito,getVentas} from '../controllers/views.controllers.js';

//ruta inicio
router.get("/", getProductsHome,(req, res) => {})
//mostrar productos
router.get("/products", getAllproducts,(req, res) => {})
//detalle producto
router.get("/detalle/:id",getDetailsById ,(req, res) => {})
//carrito
router.get("/carrito",(req, res) => {res.render('cart',{title : "carrito"})})
//ventas
router.get("/ventas",getVentas ,(req, res) => {})
//inventario
router.get("/inventario",getProductsInventario, (req, res) => {})
//actualizar 
router.get("/actualizar/:id",getProductsById,(req,res)=>{})
//ruta pagina sobre nosotros
router.get('/about-us', (req, res) => {res.render('about-us',{title : "sobre nosotros"})})
//ruta a pagina contacto
router.get('/contact', (req, res) => {res.render('contact',{title : "contactanos"})})
//ruta a pagina login
router.get('/login', (req, res) => {res.render('login',{title : "login"})})


export default router;
