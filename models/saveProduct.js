import mongoose from 'mongoose'
const Schema = mongoose.Schema
const productSchema = new Schema({
    productid:String,
    title:String,
    image:String,
    displayprice:String,
    price:Number,
    producturl:String,
    record:[{value:Number,date:{type:Date,default:Date.now}}]
})
 
export const Product = mongoose.model('Product',productSchema)
