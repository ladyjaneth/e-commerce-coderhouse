import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import routerSign from './src/routes/auth/auth.js';
import routerProduct from './src/routes/product/product.js';
import routerShoppingCart from './src/routes/shopping-cart/shopping-cart.js';

import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.APP_PORT || 8080;

//CONFIGURACIÓN PARA USO DE SESSION
app.use(session({
    secret: 'SessionSecret',
    resave: false,
    saveUninitialized: false
}));

//CONFIGURACIÓN PARA USO DE COOKIES
app.use(cookieParser('ShoppingCart'));

//CONFIGURACIÓN PARA RECIBIR PETICIONES EN FORMATO JSON
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

//CONFIGURACIÓN ARCHIVOS ESTATICOS
app.use(express.static('./src/public'));

//CONFIGURACIÓN PLANTILLA HTML
app.set('views', './src/views');
app.set('view engine', 'pug');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));

//CONFIGURACIÓN DE RUTAS
app.use('/sign', routerSign);
app.use('/products',routerProduct);
app.use('/users/:userId/shopping-cart',routerShoppingCart);