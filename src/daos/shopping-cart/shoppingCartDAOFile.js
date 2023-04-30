import fs from 'fs'
import { transformarShoppingCartDTO } from '../../dtos/shoppingCartDTO.js';

export default class ShoppingCartDAOFile{
    constructor(ruta){
        this.id = 1;
        this.ruta = ruta;
        this.shoppingCarts = [];
    }
    
    async init(){
        try{
            await fs.promises.readFile(this.ruta, 'utf-8');
            this.ready =  true;
            console.log('shoppingCarts dao en archivo ->listo!');
        }catch{
            await fs.promises.writeFile(this.ruta, '[]');
            this.ready = true;
            console.log('shoppingCarts dao en archivo ->listo!');
        }
    }

    async disconnect(){
        console.log('shoppingCarts dao en archivo ->cerrado');    
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
            const text = JSON.stringify(this.shoppingCarts, null, 2);
            await fs.promises.writeFile(this.ruta, text);
        } catch (exception) {
            console.error(exception);
        }
    }

    getIndex(id){
        return this.shoppingCarts.findIndex(shoppingCart => shoppingCart.id == id);
    }

    async getAll(){
        let shoppingCartsDTO = [];
        try {
            await this.readFile();
            shoppingCartsDTO = await transformarShoppingCartDTO(this.shoppingCarts);
        } catch (exception) {
            console.error(exception);
        }
        return shoppingCartsDTO;
    }

    async getById(id){
        let shoppingCartDTO = {};
        try {
            await this.readFile();
            const shoppingCart = await this.shoppingCarts[this.getIndex(id)];
            shoppingCartDTO = await transformarShoppingCartDTO(shoppingCart);
        } catch (exception) {
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    async save(shoppingCart){
        let shoppingCartDTO = {};
        try {
            await this.readFile();
            shoppingCart.id = this.generadorDeIds();
            this.shoppingCarts.push(shoppingCart);
            await this.writeFile();
            shoppingCartDTO = transformarShoppingCartDTO(shoppingCart);
        } catch (exception) {
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    async deleteById(id){
        await this.readFile();
        const [ erase ] = this.shoppingCarts.splice(this.getIndex(id),1);
        await this.writeFile();
        return transformarShoppingCartDTO(erase);
    } 

    async deleteAll(){
        this.shoppingCarts=[];
        await this.writeFile();
    }
    
    async updateById(id, shoppingCart){
        await this.readFile();
        const index = this.getIndex(id);
        const update = {...this.shoppingCarts[index], ...shoppingCart};
        this.shoppingCarts.splice(index, 1, update);
        await this.writeFile();
        return transformarShoppingCartDTO(update);
    }

    generadorDeIds(){
        return this.id++;
    }

}