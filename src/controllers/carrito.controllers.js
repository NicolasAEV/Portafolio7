import { Producto } from '../models/Producto.model.js'
import { Categoria } from '../models/Categoria.model.js'
import { Cliente } from '../models/Cliente.model.js'
import { Detalle_carrito } from '../models/Detalle-carrito.model.js'
import { Carrito } from '../models/Carrito.model.js'
import { sequelize } from '../db/db.js'
import { Op } from 'sequelize';
export const getCarrito = async (req, res) => {
  try {
    let id_cliente = req.usuario.id;
    console.log(id_cliente)
    let productos = await sequelize.query(`SELECT P.id, P.nombre_producto as nombre, P.precio ,P.imagen ,P.stock,DC.cantidad ,(P.precio * DC.cantidad) as total FROM "Producto" AS P
        JOIN "Detalle_carrito" as DC
        ON P.id = DC.id_producto
        JOIN "Carrito" as CA
        ON DC.id_carrito = CA.id
        WHERE CA.id_cliente = ${id_cliente}`)
    res.status(200).json({ code: 200, data: productos[0] })
  } catch (error) {
    console.log(error.stack)
    res.status(500).json({ code: 500, message: error })
  }

}

export const addProductCart = async (req, res) => {
  try {
    let { id } = req.params ;

    let id_cliente = req.usuario.id;
    let [carroCliente, creado] = await Carrito.findOrCreate({
      raw: true,
      where: id_cliente,
      defaults: {
        id_cliente
      }
    })

    let [detalle, creado2] = await Detalle_carrito.findOrCreate({
      where: { id_carrito: carroCliente.id, id_producto : id },
      defaults: {
        id_carrito: carroCliente.id,
        id_producto : id,
        cantidad: 1
      }
    })
    let producto = await Producto.findByPk(id);


    if (!creado2) {
     
      detalle.increment({ cantidad: 1 })
    }


    //validar si producto tiene stock suficiente

    if (detalle.cantidad > producto.stock) {
      await detalle.update({ cantidad: producto.stock }, {
        where: {
          id: producto.id
        }
      });

      return res.status(201).json({ message: "No hay más productos en stock." })
    }
    res.status(201).json({message: "Producto agregado correctamente."})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error al agregar el producto al carro." })
  }

}


export const deleteProductCart = async (req, res) => {
  try {
    //id_cliente, id_producto, cantidad
    let { id } = req.params;
    let id_cliente = req.usuario.id;
    const carroCliente = await Carrito.findOne({
      raw: true,
      where: { id_cliente: id_cliente },
    })

    const carroConProductos = await Detalle_carrito.findOne({
      where: { id_carrito: carroCliente.id_cliente,id_producto : id }
    });

    if (carroConProductos == null) {
      return res.status(400).json({ message: "El producto que intenta restar no existe." })
    }

    await carroConProductos.decrement({ cantidad: 1 })
   
    if (carroConProductos.dataValues.cantidad == 0) {
      carroConProductos.destroy();
      return res.status(201).json({ message: "Ha quitado todos los productos de ese tipo." })
    }
    res.status(201).json({ message: "Producto Eliminado correctamente." })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error al eliminar el producto del carro." })
  }
}

export const deleteProductCartALL = async (req,res) =>{
  try {
    let {id}  = req.params
    console.log(id)

    let id_cliente = req.usuario.id;

    const carroCliente = await Carrito.findOne({
      raw: true,
      where: { id_cliente: id_cliente },
    })
    console.log(carroCliente)
    const carroConProductos = await Detalle_carrito.findOne({
      where: { id_carrito: carroCliente.id_cliente,id_producto : id }
    });
    console.log(carroConProductos)
    carroConProductos.destroy();

     res.status(201).json({ message: "Ha quitado todos los productos de ese tipo." })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error al agregar el producto al carro." })
  }
}