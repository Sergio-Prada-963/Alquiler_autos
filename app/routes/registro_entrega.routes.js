import {Router} from 'express';
import validJWT from '../middlewares/validateJwt.js';
import {allEntregas,postRegistroEntrega} from '../controller/registro_entrega.controller.js';

const router = Router();
router.get('/all', allEntregas)
router.post('/',[validJWT], postRegistroEntrega);

export default router;