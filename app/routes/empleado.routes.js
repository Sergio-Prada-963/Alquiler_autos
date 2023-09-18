import {Router} from 'express';
import { check } from "express-validator";
import validateDocuments from '../middlewares/validateDocuments.js';
import validJWT from '../middlewares/validateJwt.js';
import {allEmpleados,empleadoVendedor,empleadoGerenAsis} from '../controller/empleado.controller.js';
import login from "../controller/login.controler.js";

const router = Router();
router.get('/all',[validJWT], allEmpleados);
router.get('/vendedor',[validJWT], empleadoVendedor);
router.get('/ger_Asis',[validJWT], empleadoGerenAsis);
router.post('/login',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('DNI','El DNI es obligatorio').not().isEmpty(),
    validateDocuments], login);

export default router;