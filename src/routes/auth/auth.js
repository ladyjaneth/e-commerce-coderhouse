import { Router } from 'express';
import * as authController from '../../controllers/auth/authController.js';

const routerSign = new Router();

routerSign.post('/in', authController.signin);
routerSign.post('/up', authController.signup);

export default routerSign;


