# Carrito de compras API

Este proyecto es una API para un carrito de compras, construida con Node.js. Permite a los usuarios agregar y eliminar productos de su carrito, y realizar una compra.

## Tabla de contenido
- [Instalación](#instalación)
- [Uso & Endpoints](#uso)
- [Licencia](#licencia)

## Instalación
Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona este repositorio: 
```
git clone https://github.com/ladyjaneth/factoryrepository40.git
```
2. Ingresa a la carpeta del proyecto: 
```
cd carrito-compras-api
```
3. Instala las dependencias: 
```
npm install
```
Crea un archivo .env basado en el archivo .env.example y configura las variables de entorno necesarias
4. Inicia la aplicación: 
```
npm start
```
## Uso
La API tiene los siguientes endpoints:

* **GET /product**: devuelve todos los productos disponibles
* **POST /product**: agrega un nuevo producto
* **GET /product/:id**: devuelve el producto con el id especificado
* **PUT /product/:id**: actualiza el producto con el id especificado
* **DELETE /product/:id**: elimina el producto con el id especificado
* **POST /shopping-cart**: agrega un producto al carrito de compras
* **DELETE /shopping-cart/**:idProducto: elimina un producto del carrito de compras
* **POST /shopping-cart**: realiza una compra de los productos en el carrito de compras

Para agregar un producto, envía una solicitud POST a **/product** con un cuerpo que contenga el nombre, precio y url de la imagén del producto. Por ejemplo:

```json
POST /product

{
  "nombre": "Zapatos",
  "precio": 50,
  "url": "https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0"
}
```

Para buscar un producto por su id, envía una solicitud GET a `/product/:id`. Por ejemplo:

```json
GET /product/1

{
  "id": 1,
  "nombre": "Zapatos",
  "precio": 50,
  "url": "https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0"
}
```

Para actualizar un producto, envía una solicitud PUT a `/product/:id` con un cuerpo que contenga los campos que deseas actualizar. Por ejemplo:

```json
PUT /productos/1

{
  "precio": 60
}
```

Para eliminar un producto, envía una solicitud DELETE a `/product/:id`. Por ejemplo:

```json
DELETE /product/1
{
  "id": 1,
  "nombre": "Zapatos",
  "precio": 50,
  "url": "https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0"
}
```

### Licencia
Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.