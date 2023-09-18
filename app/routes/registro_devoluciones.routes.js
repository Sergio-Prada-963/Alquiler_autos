import {Router} from 'express';
import validJWT from '../middlewares/validateJwt.js';
import {allDevoluciones,postRegistroDevolucion} from '../controller/registro_devolucion.controller.js';

const router = Router();
router.get('/all', allDevoluciones);
router.post('/',[validJWT], postRegistroDevolucion);

export default router;