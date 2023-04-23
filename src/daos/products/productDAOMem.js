import { transformarProductDTO } from '../../dtos/productDTO.js';

const generadorDeIds = {
    id: 1,
    next() { return this.id++}
}

export default class ProductDaoMem{
    constructor(){
        this.products = [];
    }
    
    init(){
        console.log('product dao en memory ->listo!');
    }
    disconnect(){
        console.log('products dao en memory ->cerrado');
    }


    getIndex(id){
        return this.products.findIndex(product => product.id == id);
    }

    async getAll(){
        let productsDTO = [];
        try{
            productsDTO = await transformarProductDTO(this.products);
        }catch(exception){
            console.error(exception);
        }
        return productsDTO;
    }

    async getById(id){
        let productDTO = {};
        try{
            productDTO = await transformarProductDTO(this.products[this.getIndex(id)]);
        }catch(exception){
            console.error(exception);
        }
        return productDTO;
    }

    async save(product){
        let productDTO = {};
        try{
            product.id = generadorDeIds.next();
            this.products.push(product);
            productDTO = await transformarProductDTO(product);
        }catch(exception){
            console.error(exception);
        }
        return productDTO;
    }

    async deleteById(id){
        let productDTO = {};
        try {
            const index = this.getIndex(id);
            const product = this.products[index];
            delete this.products[index];
            productDTO = transformarProductDTO(product);
        } catch (exception) {
            console.error(exception);
        }
        return productDTO;
    }

    async updateById(id, product){
        let productDTO = {};
        try {
            const index = this.getIndex(id);
            const productActualizado = {...this.products[index], ...product};
            this.products[index] = productActualizado;
            productDTO = transformarProductDTO(productActualizado);
        } catch (exception) {
            console.error(exception);
        }
        return productDTO;
    }
}