import {Router} from 'express';
import {allAlquiler,alquilerActivo} from '../controller/alquiler.controller.js'

const router = Router();
router.get('/all', allAlquiler);
router.get('/activo', alquilerActivo)

export default router;