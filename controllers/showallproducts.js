import { Product } from '../models/saveProduct.js'

export const updateAllProducts = async()=>{
    let data = []
    const allproducts = await Product.find()
    allproducts.forEach(async(product,index)=>{
        data.push(product)
    })
    return data
}
