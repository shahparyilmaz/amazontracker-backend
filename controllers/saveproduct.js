import axios from 'axios'
import cheerio from 'cheerio'
import { Product } from '../models/saveProduct.js'

export const saveProduct = async (req,res)=>{
    const data = req.body;
    const saveproduct = {
        productid:data.productid,
        title:data.title,
        image:data.image,
        displayprice:data.displayprice,
        price:data.price,
        producturl:data.producturl,
        record:[{value:data.price},{value:data.price},{value:data.price},{value:data.price},{value:data.price}]
    }
    const newProduct = new Product(saveproduct);
    // Product.productid=data.productid
    // Product.title=data.title
    // Product.image=data.image
    // Product.dislayprice=data.dislayprice
    // Product.price=data.price
    // Product.producturl=data.producturl
    // Product.record=[{value:data.price}]

    try{
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const getSavedProducts = async (req,res) => {
    try{
        const allProducts=await Product.find();
        res.status(200).json(allProducts);
    }
    catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const deleteAll = async(req,res) => {
    Product.remove({}).then(()=>{
        res.json('All Deleted')
    }).catch((error)=>{
        res.status(400).json('Error: ' + error)
    })
}