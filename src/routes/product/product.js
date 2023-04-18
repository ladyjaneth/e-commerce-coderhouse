import { Router } from 'express';
import * as producController from '../../controllers/auth/producController.js';

const routerSign = new Router();

routerSign.get('/in', producController.signin);
routerSign.get('/up', producController.signup);
routerSign.post('/in', producController.storeSession);
routerSign.post('/up', producController.storeUser);
routerSign.post('/out', producController.signout);

export default routerSign;
