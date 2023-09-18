import {Router} from 'express';
import validJWT from '../middlewares/validateJwt.js';
import {allReservas,reservaPendiente,reservaPendienteEspecifico,clienteReserva,postReservas} from '../controller/reserva.controller.js';

const router = Router();
router.get('/all', allReservas);
router.get('/pendiente', reservaPendiente);
router.get('/pendienteEspecifico', reservaPendienteEspecifico);
router.get('/cliente_data', clienteReserva);
router.post('/',[validJWT], postReservas);

export default router;