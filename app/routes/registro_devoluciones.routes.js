import {Router} from 'express';
import {allDevoluciones} from '../controller/registro_devolucion.controller.js';

const router = Router();
router.get('/all', allDevoluciones)

export default router;