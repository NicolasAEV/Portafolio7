import * as dotenv from 'dotenv'
dotenv.config()

import app from "./app.js"
import {sequelize} from "./db/db.js";

import './models/Producto.model.js'
import './models/Vendedor.model.js'
import './models/Orden.model.js'
import './models/Detalle-orden.model.js'
import './models/Detalle-carrito.model.js'
import './models/Carrito.model.js'
import './models/Direccion.model.js'
import './models/Descuento.model.js'
import './models/Comentario.model.js'
import './models/Cliente.model.js'
import './models/Categoria.model.js'
import './models/Cupon.model.js'
import './models/relaciones.js'



const main = async () =>{
    try {
        await sequelize.authenticate();
        console.log('contectado con exito')
        await sequelize.sync({force:false , alter:false});
        //rescatamos el valor del puerto y en caso de error dejamos por defecto el puerto 3000
        let PORT =process.env.PORT;
        app.listen(PORT , ()=>console.log('servidor en el puerto' + PORT))
    } catch (error) {
        console.log(error.stack)
        console.log('a ocurrido un error')
    }
}

main();