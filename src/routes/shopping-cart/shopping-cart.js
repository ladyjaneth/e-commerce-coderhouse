import { Router } from 'express';
import * as shoppingCartController from '../../controllers/shopping-cart/shoppingCartController.js';

const shoppingCart = new Router();

shoppingCart.get('/', shoppingCartController.all); // api/shoppingCart/
shoppingCart.post('/', shoppingCartController.store);
shoppingCart.put('/:id', shoppingCartController.update);
shoppingCart.delete('/:id', shoppingCartController.deleteById);

export default shoppingCart;