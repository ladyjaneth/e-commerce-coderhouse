import mongoose from 'mongoose';
import { transformarShoppingCartDTO } from '../../dtos/shoppingCartDTO.js';
import  shoppingCartModel from '../../models/shoppingCart.model.js';


export default class ShoppingCartDAODb {
    constructor (connString){
        this.id = 1;
        this.connString = connString;
        this.shoppingCarts = shoppingCartModel; 
    }

    async init(){
        await mongoose.connect(this.connString);
        const shoppingCart = await this.shoppingCarts.findOne({}).sort({ _id: -1 });
        this.id = await shoppingCart?.id + 1;
        console.log('shoppingCarts dao en mongodb -> listo');
    }

    async disconnect(){
        await mongoose.disconnect();
        console.log('shoppingCarts dao en mongodb -> cerrado');
    }

    async getAll(){
        const shoppingCarts = await this.shoppingCarts.find({});
        return transformarShoppingCartDTO(shoppingCarts);
    }

    async getById(id){
        const shoppingCart = await this.shoppingCarts.findOne({id:id});
        return transformarShoppingCartDTO(shoppingCart);
    }

    async save(newShoppingCart){
        newShoppingCart.id = this.generadorDeIds();
        await this.shoppingCarts.create(newShoppingCart);
        return transformarShoppingCartDTO(newShoppingCart);
    }

    async deleteById(id){
        const erase = await this.shoppingCarts.findOneAndDelete({id:id});
        return transformarShoppingCartDTO(erase);
    }

    async deleteAll(){
        await this.shoppingCarts.deleteMany({});
    }

    async updateById(id, newShoppingCart){
        const update = await this.shoppingCarts.findOneAndUpdate({id:id},{$set:newShoppingCart});
        return transformarShoppingCartDTO(update);
    }

    generadorDeIds(){
        return this.id++;
    }

}