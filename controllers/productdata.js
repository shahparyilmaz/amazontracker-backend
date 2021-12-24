import { Product } from '../models/saveProduct.js'

export const getProductData = async(id) => {
    const product = await Product.findOne({productid:id})
    return product
}