import mongoose from 'mongoose';

const shoppingCart = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    date:{type: Date, default: Date.now},
    address:{type:String},
    products:[
        {
            type: mongoose.ObjectId,
            ref: 'products'
        }
    ]
});

export default mongoose.model('shoppingCarts',shoppingCart);