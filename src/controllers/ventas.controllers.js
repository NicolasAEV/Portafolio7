import { Orden } from "../models/Orden.model.js"
import { Detalle_orden } from "../models/Detalle-orden.model.js"
import { Carrito } from '../models/Carrito.model.js'
import { Producto } from '../models/Producto.model.js'
import { Detalle_carrito } from "../models/Detalle-carrito.model.js"
import { sequelize } from "../db/db.js"
import { Op } from 'sequelize';
export const getAllVentas = async (req, res) => {
    try {
        let ordenes = await Orden.findAll({
            raw: false,
            include: [{ model: Detalle_orden }]
        });
        let productosFormatiados = ordenes.map(producto => {
            let objectProducto = {
                id: producto.dataValues.id,
                fecha: producto.dataValues.fecha,
                tipo: producto.dataValues.tipo_boleta,
            }
            return objectProducto;
        })
        res.status(200).json({ code: 200, data: productosFormatiados })
    } catch (error) {
        res.status(500).json({ code: 500, message: error })
    }
}

export const createOrden = async (req, res) => {
    let id_cliente = req.usuario.id;
    const t = await sequelize.transaction();

    try {

        let cart = await Carrito.findOne({
            raw: true,
            where: {
                id_cliente: id_cliente
            }
        })
        let idCarritoCliente = cart.id;

        if (cart == null) throw new Error("No existe carrito asociado.")

        let detalleProductos = await Detalle_carrito.findAll({
            raw: true,
            where: {
                id_carrito: idCarritoCliente
            }
        })

        if (detalleProductos.length == 0) throw new Error("cliente no tiene productos en el cart.")

        let nuevaVenta = await Orden.create({
            id_cliente: id_cliente,
            tipo_boleta: 'factura',
            medio_pago: 'debito',
            fecha: new Date()
        }, { transaction: t })
        let id_orden = nuevaVenta.dataValues.id;


        for (let index = 0; index < detalleProductos.length; index++) {
            let id_producto = detalleProductos[index].id_producto;
         
            let cantidad = detalleProductos[index].cantidad;
            const producto = await Producto.findOne({
                raw: false,
                where: { id: id_producto }
            });

            if (producto == null) {
                throw new Error("un producto no existe.")
            }

            await producto.decrement({ stock: cantidad }, { transaction: t })

            const detalleVenta = await Detalle_orden.create({
                cantidad: cantidad,
                precio: producto.precio,
                id_orden: id_orden,
                id_producto: id_producto
            }, { transaction: t })


        }

        await Detalle_carrito.destroy({
            where: {
                id_carrito: idCarritoCliente, 
            },
            transaction: t
        },  )

        await t.commit();

        res.status(201).json({ code: 201, message: "Orden generada correctamente." })

    } catch (error) {

        await t.rollback();
        res.status(500).json({ code: 500, error: "Error al generar la venta." })
    }
}