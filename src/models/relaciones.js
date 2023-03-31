import {Producto} from './Producto.model.js'
import {Vendedor} from './Vendedor.model.js'
import {Orden} from './Orden.model.js'
import {Detalle_orden} from  './Detalle-orden.model.js'
import {Carrito} from  './Carrito.model.js'
import {Detalle_carrito} from  './Detalle-carrito.model.js'
import {Direccion} from './Direccion.model.js'
import {Descuento} from  './Descuento.model.js'
import {Comentario} from './Comentario.model.js'
import {Cliente} from  './Cliente.model.js'
import {Categoria} from  './Categoria.model.js'
import {Cupon} from './Cupon.model.js'

//relacion uno a muchos entre vendedor y producto
Vendedor.hasMany(Producto , {foreignKey : 'id_vendedor'});
Producto.belongsTo(Vendedor, {foreignKey : 'id_vendedor'})

//relacion uno a muchos entre categoria y producto
Categoria.hasMany(Producto , {foreignKey : "id_categoria"});
Producto.belongsTo(Categoria , {foreignKey : "id_categoria"})

//relacion uno a muchos entre categoria y producto
Descuento.hasMany(Producto, {foreignKey : "id_descuento"});
Producto.belongsTo(Descuento , {foreignKey : "id_descuento"})

//relacion uno a muchos cliente y direccion
Cliente.hasMany(Direccion, {foreignKey : "id_direccion"});
Direccion.belongsTo(Cliente , {foreignKey : "id_direccion"})

//relacion uno a muchos cliente y direccion
Cliente.hasMany(Orden, {foreignKey : "id_cliente"});
Orden.belongsTo(Cliente , {foreignKey : "id_cliente"})

//relacion uno a muchos order y cupon
Cupon.hasMany(Orden, {foreignKey : "id_cupon"});
Orden.belongsTo(Cupon , {foreignKey : "id_cupon"})

//relacion uno a muchos Cliente y comentarios
Cliente.hasMany(Comentario, {foreignKey : "id_comentario"});
Comentario.belongsTo(Cliente , {foreignKey : "id_comentario"})

//relacion uno a muchos Productos y comentarios
Producto.hasMany(Comentario, {foreignKey : "id_producto"});
Comentario.belongsTo(Producto , {foreignKey : "id_producto"})

//relacion uno a muchos orden y detalle-orden
Orden.hasMany(Detalle_orden, {foreignKey : "id_orden"});
Detalle_orden.belongsTo(Orden , {foreignKey : "id_orden"})

//relacion uno a muchos producto y detalle-orden
Producto.hasMany(Detalle_orden, {foreignKey : "id_producto"});
Detalle_orden.belongsTo(Producto , {foreignKey : "id_producto"})

//relacion uno a muchos Cliente y Carrito
Cliente.hasMany(Carrito, {foreignKey : "id_cliente", as: 'Carrito' });
Carrito.belongsTo(Cliente , {foreignKey : "id_cliente"})

//relacion uno a muchos carrito y detalle carrito
Carrito.hasMany(Detalle_carrito, {foreignKey : "id_carrito", as : 'Detalle' });
Detalle_carrito.belongsTo(Carrito , {foreignKey : "id_carrito" })

//realacion uno a muchos producto y detalle carrito
Producto.hasMany(Detalle_carrito, {foreignKey : "id_producto", as : 'Producto'});
Detalle_carrito.belongsTo(Producto , {foreignKey : "id_producto"})
