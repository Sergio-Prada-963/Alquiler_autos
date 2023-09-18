import {Router} from 'express';
import validJWT from '../middlewares/validateJwt.js';
import {allAlquiler,alquilerActivo,findAlquiler,cosotoTotal,fechaEspecifica,cantidadAlquiler,entreFechas,postAlquileres} from '../controller/alquiler.controller.js'

const router = Router();
router.get('/all', allAlquiler);
router.get('/activo', alquilerActivo);
router.get('/find', findAlquiler);
router.get('/costoTotal', cosotoTotal);
router.get('/fechaEspecifica', fechaEspecifica);
router.get('/cantidadAlquiler', cantidadAlquiler);
router.get('/fechas', entreFechas);
router.post('/',[validJWT], postAlquileres);

export default router;