import fs from 'fs'
import { transformarProductDTO } from '../../dtos/productDTO.js';

export default class ProductDAOFile{
    constructor(ruta){
        this.id = 1;
        this.ruta = ruta;
        this.products = [];
    }
    
    async init(){
        try{
            await fs.promises.readFile(this.ruta, 'utf-8');
            this.ready =  true;
            console.log('productos dao en archivo ->listo!');
        }catch{
            await fs.promises.writeFile(this.ruta, '[]');
            this.ready = true;
            console.log('products dao en archivo ->listo!');
        }
    }

    async disconnect(){
        console.log('products dao en archivo ->cerrado');    
    }


    async readFile(){
        let texto = '{}';
        try {
            texto = await fs.promises.readFile(this.ruta, 'utf-8');
            texto = await JSON.parse(texto);
        } catch (exception) {
            console.error(exception);            
        }
        return texto;
    }

    async writeFile(){
        try {
            const text = JSON.stringify(this.products, null, 2);
            await fs.promises.writeFile(this.ruta, text);
        } catch (exception) {
            console.error(exception);
        }
    }

    getIndex(id){
        return this.products.findIndex(product => product.id == id);
    }

    async getAll(){
        let productsDTO = [];
        try {
            await this.readFile();
            productsDTO = await transformarProductDTO(this.products);
        } catch (exception) {
            console.error(exception);
        }
        return productsDTO;
    }

    async getById(id){
        let productDTO = {};
        try {
            await this.readFile();
            const product = await this.products[this.getIndex(id)];
            productDTO = await transformarProductDTO(product);
        } catch (exception) {
            console.error(exception);
        }
        return productDTO;
    }

    async save(product){
        let productDTO = {};
        try {
            await this.readFile();
            product.id = this.generadorDeIds();
            this.products.push(product);
            await this.writeFile();
            productDTO = transformarProductDTO(product);
        } catch (exception) {
            console.error(exception);
        }
        return productDTO;
    }

    async deleteById(id){
        await this.readFile();
        const [ erase ] = this.products.splice(this.getIndex(id),1);
        await this.writeFile();
        return transformarProductDTO(erase);
    } 

    async deleteAll(){
        this.products=[];
        await this.writeFile();
    }
    
    async updateById(id, product){
        await this.readFile();
        const index = this.getIndex(id);
        const update = {...this.products[index], ...product};
        this.products.splice(index, 1, update);
        await this.writeFile();
        return transformarProductDTO(update);
    }

    generadorDeIds(){
        return this.id++;
    }

}