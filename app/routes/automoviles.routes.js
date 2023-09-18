import {Router} from 'express';
import {allAutomoviles,capacidad5,autosOrdenados} from '../controller/automovil.controller.js'

const router = Router();
router.get('/all', allAutomoviles);
router.get('/capacidad5', capacidad5);
router.get('/ordenados', autosOrdenados);

export default router;