import {Router} from 'express';
import {allClientes} from '../controller/clientes.controller.js'

const router = Router();
router.get('/all', allClientes)

export default router;