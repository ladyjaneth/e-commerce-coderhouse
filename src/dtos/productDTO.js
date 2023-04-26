export default class ProductDTO{
    constructor({id, nombre, precio, categoria, url}){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.url = url;
    }
}

export function transformarProductDTO(products) {
    return Array.isArray(products) ? products.map(product => new ProductDTO(product)) : new ProductDTO(products);
}