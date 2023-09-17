import {Router} from 'express';
import {allEntregas} from '../controller/registro_entrega.controller.js';

const router = Router();
router.get('/all', allEntregas)

export default router;