import { transformarShoppingCartDTO } from '../../dtos/shoppingCartDTO.js';

export default class ShoppingCartDaoMem{
    constructor(){
        this.id = 1;
        this.shoppingCarts = [];
    }
    
    init(){
        console.log('Shopping Cartdao en memory ->listo!');
    }
    disconnect(){
        console.log('Shopping Cart dao en memory ->cerrado');
    }


    getIndex(id){
        return this.shoppingCarts.findIndex(shoppingCart => shoppingCart.id == id);
    }

    async getAll(){
        let shoppingCartDTO = [];
        try{
            shoppingCartDTO = await transformarShoppingCartDTO(this.shoppingCarts);
        }catch(exception){
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    async getById(id){
        let shoppingCartDTO = {};
        try{
            shoppingCartDTO = await transformarShoppingCartDTO(this.shoppingCarts[this.getIndex(id)]);
        }catch(exception){
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    async save(shoppingCart){
        let shoppingCartDTO = {};
        try{
            shoppingCart.id = this.generadorDeIds();
            this.shoppingCarts.push(shoppingCart);
            shoppingCartDTO = await transformarShoppingCartDTO(shoppingCart);
        }catch(exception){
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    async deleteById(id){
        let shoppingCartDTO = {};
        try {
            const index = this.getIndex(id);
            const shoppingCart = this.shoppingCarts[index];
            delete this.shoppingCarts[index];
            shoppingCartDTO = transformarShoppingCartDTO(shoppingCart);
        } catch (exception) {
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    async updateById(id, shoppingCart){
        let shoppingCartDTO = {};
        try {
            const index = this.getIndex(id);
            const shoppingCartUpdated = {...this.shoppingCarts[index], ...shoppingCart};
            this.shoppingCarts[index] = shoppingCartUpdated;
            shoppingCartDTO = transformarShoppingCartDTO(shoppingCartUpdated);
        } catch (exception) {
            console.error(exception);
        }
        return shoppingCartDTO;
    }

    generadorDeIds(){
        return this.id++;
    }
}