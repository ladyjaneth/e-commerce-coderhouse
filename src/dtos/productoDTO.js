export default class ProductoDTO{
    constructor({id, nombre, precio, url}){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

export function transformarProductoDTO(productos) {
    return Array.isArray(productos) ? productos.map(producto => new ProductoDTO(producto)) : new ProductoDTO(productos);
}