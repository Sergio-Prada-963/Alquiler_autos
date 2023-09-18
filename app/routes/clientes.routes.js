import {Router} from 'express';
import validJWT from '../middlewares/validateJwt.js';
import {allClientes,clienteDNI,clienteAlquiler,postClientes} from '../controller/clientes.controller.js'

const router = Router();
router.get('/all', allClientes)
router.get('/DNI', clienteDNI)
router.get('/alquilado', clienteAlquiler);
router.post('/',[validJWT], postClientes)/// validacion solo para empleados

export default router;