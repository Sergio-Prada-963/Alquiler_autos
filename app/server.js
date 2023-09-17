import coneccionDb from './../config/conexion.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import routerClientes from './routes/clientes.routes.js'
import routerSucursalAuto from './routes/Sucursal_automoviles.routes.js';
import routerAlquiler from './routes/alquiler.routes.js';
import routerAutomovil from './routes/automoviles.routes.js';
import routerEmpleado from './routes/empleado.routes.js';
import routerDevoluciones from './routes/registro_devoluciones.routes.js';
import routerEntregas from './routes/registro_entrega.routes.js';
import routerReservas from './routes/reservas.routes.js';
import routerSucursal from './routes/sucursal.routes.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PUERTO;
        this.app.use(cookieParser());
        this.path = {
            clientes: "/api/clientes",
            sucursalAuto: "/api/sucursalAuto",
            alquiler: "/api/alquiler",
            automovil: "/api/automovil",
            empleado: "/api/empleado",
            devoluciones: "/api/devoluciones",
            entregas: "/api/entregas",
            reservas: "/api/reservas",
            sucursal: "/api/sucursal"
        };
        this.middlewares();
        this.routes();
        this.coneccion();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.path.clientes, routerClientes);
        this.app.use(this.path.sucursalAuto, routerSucursalAuto);
        this.app.use(this.path.alquiler, routerAlquiler);
        this.app.use(this.path.automovil, routerAutomovil);
        this.app.use(this.path.empleado, routerEmpleado);
        this.app.use(this.path.devoluciones, routerDevoluciones);
        this.app.use(this.path.entregas, routerEntregas);
        this.app.use(this.path.reservas, routerReservas);
        this.app.use(this.path.sucursal, routerSucursal);
    }
    async coneccion(){
        await coneccionDb();
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`escuchando Peticiones en el puerto ${this.port}`);
        });
    }
}
export default Server