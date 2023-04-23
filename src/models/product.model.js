import mongoose from 'mongoose';

const product = new mongoose.Schema({
    id: {type:Number},
    nomre:{type:String},
    precio:{type:Number},
    url:{type:String}
});

export default mongoose.model('products',product);
