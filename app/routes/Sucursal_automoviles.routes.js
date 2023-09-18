import {Router} from 'express';
import validJWT from '../middlewares/validateJwt.js';
import {carrosDisponibles,cantidadDisponible,cantidadDireccion,Cap5Disponible,updateSucursalAuto} from '../controller/sucursal_automoviles.controller.js'

const router = Router();

router.get('/disponibles', carrosDisponibles);
router.get('/cantidad', cantidadDisponible);
router.get('/cantidadDireccion', cantidadDireccion);
router.get('/cap5Disponible', Cap5Disponible);
router.patch('/:id',[validJWT], updateSucursalAuto)// validaciones

export default router