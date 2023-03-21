import { transformarProductoDTO } from '../../dtos/productoDTO';

export default class ProductoDaoMem{
    constructor(){
        this.productos = [];
    }

    async getIndex(id){
        return await this.productos.findIndex(producto => producto.id == id);
    }

    async getAll(){
        let productosDTO = [];
        try{
            productosDTO = await transformarProductoDTO(this.productos);
        }catch(exception){
            console.error(exception);
        }
        return productosDTO;
    }

    async getById(id){
        let productoDTO = {};
        try{
            productoDTO = await transformarProductoDTO(this.productos[this.getIndex(id)]);
        }catch(exception){
            console.error(exception);
        }
        return productoDTO;
    }

    async save(producto){
        let productoDTO = {};
        try{
            this.productos.push(producto)
            productoDTO = await transformarProductoDTO(producto);
        }catch(exception){
            console.error(exception);
        }
        return productoDTO;
    }

    async deleteById(id){
        let productoDTO = {};
        try {
            productoDTO = transformarProductoDTO(this.productos.slice(this.getIndex(id), 1));
        } catch (exception) {
            console.error(exception);
        }
        return productoDTO;
    }

    async updatedById(id, producto){
        let productoDTO = {};
        try {
            const index = this.getIndex(id);
            const productoActualizado = {...this.productos[index], producto};
            this.productos.slice(index, 1, productoActualizado);
            productoDTO = transformarProductoDTO(productoActualizado);
        } catch (exception) {
            console.error(exception);
        }
        return productoDTO;
    }
}