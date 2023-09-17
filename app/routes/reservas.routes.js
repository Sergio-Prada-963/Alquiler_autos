import {Router} from 'express';
import {allReservas,reservaPendiente} from '../controller/reserva.controller.js';

const router = Router();
router.get('/all', allReservas);
router.get('/pendiente', reservaPendiente)

export default router;