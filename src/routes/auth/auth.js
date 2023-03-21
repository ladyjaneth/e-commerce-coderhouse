import { Router } from 'express';
import * as authController from '../../controllers/auth/authController.js';

const routerSign = new Router();

routerSign.get('/in', authController.signin);
routerSign.get('/up', authController.signup);
routerSign.post('/in', authController.storeSession);
routerSign.post('/up', authController.storeUser);
routerSign.post('/out', authController.signout);

export default routerSign;