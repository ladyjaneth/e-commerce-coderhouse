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


    getIndex(userId){
        return this.shoppingCarts.findIndex(shoppingCart => shoppingCart.userId == userId);
    }

    async getAll(userId){
        let shoppingCartDTO = [];
        try{
            const shoppingCartUser = this.shoppingCarts[this.getIndex(userId)];
            shoppingCartDTO = await transformarShoppingCartDTO(shoppingCartUser);
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

    async save(user, shoppingCart){
        let shoppingCartDTO = {};
        try{
            const shoppingCartUser = this.shoppingCarts[this.getIndex(user.id)];
            if(shoppingCartUser)
            {

            }else{
                shoppingCart.id = this.generadorDeIds();
                shoppingCart.userId = user.id;
                shoppingCart.date = new Date();
                shoppingCart.address = user.address;
                this.shoppingCarts.push(shoppingCart);
            }
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