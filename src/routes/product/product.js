import { Router } from 'express';
import * as productController from '../../controllers/product/productController.js';

const product = new Router();

product.get('/', productController.all); // api/product/
product.get('/:id', productController.findById); //
product.post('/', productController.store);
product.put('/:id', productController.update);
product.delete('/:id', productController.deleteById);

export default product;
