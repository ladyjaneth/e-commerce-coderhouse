import fs from 'fs'
import { transformarProductoDTO } from '../../dtos/productoDTO';

export default class ProductoDAOFile{
    constructor(ruta){
        this.ruta = ruta;
        this.productos = [];
    }

    async readFile(){
        let texto = '{}';
        try {
            texto = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            texto = await JSON.parse(texto);
        } catch (exception) {
            console.error(exception);            
        }
        return texto;
    }

    async writeFile(){
        try {
            const texto = JSON.stringify(this.productos, null, 2);
            await fs.promises.writeFile(this.ruta, texto);s
        } catch (exception) {
            console.error(exception);
        }
    }

    getIndex(id){
        return this.productos.findIndex(producto => producto.id == id);
    }

    async getAll(){
        let productosDTO = [];
        try {
            await this.readFile();
            productosDTO = await transformarProductoDTO(this.productos);
        } catch (exception) {
            console.error(exception);
        }
        return productosDTO;
    }

    async getById(){
        let productoDTO = {};
        try {
            await this.readFile();
            const producto = await this.productos[this.getIndex(id)];
            productoDTO = await transformarProductoDTO(producto);
        } catch (exception) {
            console.error(exception);
        }
        return productoDTO;
    }

    async save(producto){
        let productoDTO = {};
        try {
            await this.readFile();
            this.productos.push(producto);
            await this.writeFile();
            productoDTO = transformarProductoDTO(producto);
        } catch (exception) {
            console.error(exception);
        }
        return productoDTO;
    }
}