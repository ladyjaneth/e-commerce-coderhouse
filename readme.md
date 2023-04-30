# E-Commerce API

Este proyecto es una API para un carrito de compras, construida con Node.js. Permite a los usuarios agregar y eliminar productos de su carrito, y realizar una compra.

## Tabla de contenido
- [Instalación](#instalación)
- [Endpoints](#endpoints)
  - [Registro/Autenticación](#sign-upin)
  - [Productos](#productos)
  - [Carrito de Compras](#carrito-de-compras)
- [Licencia](#licencia)

## Instalación
Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona este repositorio: 
```
git clone https://github.com/ladyjaneth/e-commerce-coderhouse.git
```
2. Ingresa a la carpeta del proyecto: 
```
cd e-commerce-coderhouse
```
3. Instala las dependencias: 
```
npm install
```
4. Crea un archivo .env basado en el archivo .env.example y configura las variables de entorno necesarias.

5. Inicia la aplicación: 
```
npm start
```
## Endpoints
La API tiene los siguientes endpoints:

## Sign up/in

* **POST /sign/up**: agrega un nuevo usuario al sistema
* **POST /sign/in**: inicia sesión en el sistema

Para agregar un nuevo usuario, envía una solicitud POST a **/sign/up** con un cuerpo que contenga el nombre, correo electronico, contraseña y dirección de envió. Por ejemplo:

```json
POST /sign/up

{
  "name": "User",
  "email": "user@user.com",
  "address": "Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678",
  "password": "password"
}
```

Para iniciar sesión, envía una solicitud POST a **/sign/in** con un cuerpo que contenga el nombre, correo electronico, contraseña y dirección de envió. Por ejemplo:

```json
POST /sign/in

{
  "email": "user@user.com",
  "password": "password"
}
```

### Productos

* **GET /products**: devuelve todos los productos disponibles
* **POST /products**: agrega un nuevo producto
* **GET /products/:id**: devuelve el producto con el id especificado
* **PUT /products/:id**: actualiza el producto con el id especificado
* **DELETE /products/:id**: elimina el producto con el id especificado

Para agregar un producto, envía una solicitud POST a **/product** con un cuerpo que contenga el correo eléctronico y la contraseña de un usuario registrado. Por ejemplo:

```json
POST /products

{
  "nombre": "Zapatos",
  "precio": 50,
  "url": "https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0"
}
```

Para buscar un producto por su id, envía una solicitud GET a `/product/:id`. Por ejemplo:

```json
GET /products/1

{
  "id": 1,
  "nombre": "Zapatos",
  "precio": 50,
  "url": "https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0"
}
```

Para actualizar un producto, envía una solicitud PUT a `/product/:id` con un cuerpo que contenga los campos que deseas actualizar. Por ejemplo:

```json
PUT /products/1

{
  "precio": 60
}
```

Para eliminar un producto, envía una solicitud DELETE a `/product/:id`. Por ejemplo:

```
DELETE /product/1
```
### Carrito de Compras

* **POST /users/:userId/shopping-cart**: agrega un producto al carrito de compras del id del usuario especificado 
* **GET /users/:userId/shopping-cart**: devuelve el contenido del carrito del id del usuario especificado, incluyendo los productos agregados y su cantidad. 
* **DELETE /users/:userId/shopping-cart/:productId**: elimina un producto del carrito de compras del id del usuario especificado
* **PUT /users/:userId/shopping-cart/:productId**: actualiza la cantidad del producto con el id especificado

### Licencia
Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.