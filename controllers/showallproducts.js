import { Product } from '../models/saveProduct.js'

export const updateAllProducts = async()=>{
    let data = []
    const allproducts = await Product.find()[0]
    return allproducts
}
