import { Router } from 'express';
const router = Router();
import { getProductsHome,getAllproducts ,getProductsInventario,getProductsById,getDetailsById,getProuctsCarrito,getVentas} from '../controllers/views.controllers.js';
import { verificarTokenCliente } from '../middleware/jwt.js';
import { verificarTokenVendedor } from '../middleware/jwt-vendedor.js';
//ruta inicio
router.get("/", getProductsHome,(req, res) => {})
//mostrar productos
router.get("/products", getAllproducts,(req, res) => {})
//detalle producto
router.get("/detalle/:id",getDetailsById ,(req, res) => {})
//carrito
router.get("/carrito",verificarTokenCliente,(req, res) => {res.render('cart',{title : "carrito"})})


//ruta pagina sobre nosotros
router.get('/about-us', (req, res) => {res.render('about-us',{title : "sobre nosotros"})})
//ruta a pagina contacto
router.get('/contact', (req, res) => {res.render('contact',{title : "contactanos"})})
//ruta a pagina login
router.get('/login', (req, res) => {res.render('login',{title : "login",layout:false})})
//ruta a pagina registro
router.get('/registro', (req, res) => {res.render('registro',{title : "registro",layout:false})})
//administracion
router.get('/loginadmin',(req,res) =>{res.render('login-admin',{title:'login administrador',layout:false})})
//ventas
router.get("/ventas",verificarTokenVendedor,getVentas ,(req, res) => {})
//inventario
router.get("/inventario",verificarTokenVendedor,getProductsInventario, (req, res) => {})
//actualizar 
router.get("/actualizar/:id",verificarTokenVendedor,getProductsById,(req,res)=>{})
export default router;
