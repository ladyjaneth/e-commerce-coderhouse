import mongoose from 'mongoose';
import { transformarProductDTO } from '../../dtos/productDTO.js';
import  productModel from '../../models/product.model.js';


export default class ProductDAODb {
    constructor (connString){
        this.id = 1;
        this.connString = connString;
        this.products = productModel; 
    }

    async init(){
        await mongoose.connect(this.connString);
        const product = await this.products.findOne({}).sort({ _id: -1 });
        this.id = await product?.id + 1;
        console.log('producto dao en mongodb -> listo');
    }

    async disconnect(){
        await mongoose.disconnect();
        console.log('productos dao en mongodb -> cerrado');
    }

    async getAll(){
        const products = await this.products.find({});
        return transformarProductDTO(products);
    }

    async getById(id){
        const product = await this.products.findOne({id:id});
        return transformarProductDTO(product);
    }

    async save(newProduct){
        newProduct.id = this.generadorDeIds();
        await this.products.create(newProduct);
        return transformarProductDTO(newProduct);
    }

    async deleteById(id){
        const erase = await this.products.findOneAndDelete({id:id});
        return transformarProductDTO(erase);
    }

    async deleteAll(){
        await this.products.deleteMany({});
    }

    async updateById(id, newProduct){
        const update = await this.products.findOneAndUpdate({id:id},{$set:newProduct});
        return transformarProductDTO(update);
    }

    generadorDeIds(){
        return this.id++;
    }

}