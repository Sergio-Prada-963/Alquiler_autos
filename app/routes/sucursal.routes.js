import {Router} from 'express';
import {allSucursales} from '../controller/sucursal.controller.js';

const router = Router();
router.get('/all', allSucursales)

export default router;