import {Router} from 'express';
import {allAutomoviles} from '../controller/automovil.controller.js'

const router = Router();
router.get('/all', allAutomoviles)

export default router;