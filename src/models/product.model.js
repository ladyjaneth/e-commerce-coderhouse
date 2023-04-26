import mongoose from 'mongoose';

const product = new mongoose.Schema({
    id: {type:Number, unique: true},
    nombre:{type:String},
    categoria:{type:String},
    precio:{type:Number},
    url:{type:String}
});

export default mongoose.model('products',product);
