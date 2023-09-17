import {Router} from 'express';
import {allEmpleados} from '../controller/empleado.controller.js';

const router = Router();
router.get('/all', allEmpleados)

export default router;