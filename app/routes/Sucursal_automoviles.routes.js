import {Router} from 'express';
import {carrosDisponibles} from '../controller/sucursal_automoviles.controller.js'

const router = Router();

router.get('/disponibles', carrosDisponibles)

export default router