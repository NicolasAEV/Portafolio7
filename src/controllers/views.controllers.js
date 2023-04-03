import { Producto } from '../models/Producto.model.js'
import { Categoria } from '../models/Categoria.model.js'
import { Detalle_carrito } from '../models/Detalle-carrito.model.js'
import { Carrito } from '../models/Carrito.model.js'
import { literal } from 'sequelize'
import {Orden} from '../models/Orden.model.js'
import {Detalle_orden} from '../models/Detalle-orden.model.js'
import { Op } from 'sequelize';
//gets all products
export const getProuctsCarrito = async (req, res) => {

  let productosCarro = await sequelize.query(`SELECT P.id, P.nombre_producto as nombre, P.precio ,P.imagen ,P.stock,DC.cantidad ,(P.precio * DC.cantidad) as total FROM "Producto" AS P
  JOIN "Detalle_carrito" as DC
  ON P.id = DC.id_producto
  JOIN "Carrito" as CA
  ON DC.id_carrito = CA.id
  WHERE CA.id_cliente = 1`)

  res.render('cart', {
    productosCarro,
    title: 'Carrito',
  })
}

export const getProductsHome = async (req, res) => {
  let productos = await Producto.findAll({ raw: true });
  res.render('index', {
    title: 'inicio',
    productos
  })
}

export const getAllproducts = async (req, res) => {
  let productos = await Producto.findAll({ raw: true });
  res.render('products', {
    title: 'productos',
    productos
  })
}
export const getProductsInventario = async (req, res) => {
  let productos = await Producto.findAll({
    order: [['fecha', 'DESC']],
    raw: false,
    include: {
      model: Categoria,
      // attributes: ['nombre_categoria'],
    }

  });

  let productosFormatiados = productos.map(producto => {
    let objectProducto = {
      id: producto.dataValues.id,
      nombre: producto.dataValues.nombre_producto,
      imagen: producto.dataValues.imagen,
      precio: producto.dataValues.precio,
      categoria: producto.dataValues.Categorium.dataValues.nombre_categoria,
      descripcion: producto.dataValues.descripcion,
      stock: producto.dataValues.stock,
    }
    return objectProducto;
  })
  let categorias = await Categoria.findAll();
  let categoriaId = await Categoria.findAll({ raw: true });
  res.render('inventory', {
    layout : 'admin',
    title: 'inicio',
    productos: productosFormatiados,
    categoria: categorias
  })
}
export const getProductsById = async (req, res) => {
  let { id } = req.params
  //buscamos el producto por el id
  let producto = await Producto.findByPk(id, {
    raw: true,
    include: Categoria
  });

  //obtenemos todas las categorias
  let categorias = await Categoria.findAll({ raw: true });

  res.render('actualizar-producto', {
    title: 'actualizar producto',
    layout : 'admin',
    producto,
    categorias,
  })
}
export const getDetailsById = async (req, res) => {
  let { id } = req.params
  //buscamos el producto por el id
  let producto = await Producto.findByPk(id, {
    raw: true,
  });
  let allProductos = await Producto.findAll({
    raw: true,
    limit: 6
  });
  //obtenemos todas las categorias
  let categorias = await Categoria.findAll({ raw: true });

  res.render('detalle', {
  
    title: 'detalle producto',
    producto,
    categorias,
    productos: allProductos

  })
}
export const addProduct = async (req, res) => {
  try {
    let { nombre, precio, stock, imagen, categoria, descripcion } = req.body
    let id_vendedor = req.vendedor.id
    let fecha = new Date();
  
    let producto = await Producto.create({ nombre_producto: nombre, precio: precio, stock: stock, imagen: imagen, id_categoria: categoria, descripcion: descripcion, fecha: fecha ,id_vendedor:id_vendedor})
    res.render('inventory', {
      producto,
      title: inventario
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ code: 500, message: "Error al guardar el producto." })
  }

}

export const getVentas = async (req,res) =>{
  let ordenes = await Orden.findAll({raw :false , 
                                    include :[{model : Detalle_orden }] });

  let productosFormatiados = ordenes.map(producto => {
    let objectProducto = {
      id: producto.dataValues.id,
      fecha: producto.dataValues.fecha,
      tipo: producto.dataValues.tipo_boleta,
      // precio: producto.dataValues.precio,
    }
    return objectProducto;
  })

  res.render('ventas',{
    layout : 'admin',
    title : 'ventas',
    ordenes : productosFormatiados
  })
}