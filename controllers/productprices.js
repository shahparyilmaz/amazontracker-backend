import { Product } from '../models/saveProduct.js'

export const getProductPrices = async(id) => {
    try{
        const product = await Product.findOne({productid:id})
        return product.record
    }
    catch{return 'Invalid Product ID'}
}