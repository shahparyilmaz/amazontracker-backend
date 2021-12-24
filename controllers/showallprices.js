import { getProductPrice } from '../data/price.js'
import { Product } from '../models/saveProduct.js'

export const showAllPrices2 = async()=>{
    const allproducts = await Product.find()
    // // console.log(allproducts)
    var res=[]
    for (let i=0;i<allproducts.length;i++){
        const product = allproducts[i]
        const price = await getProductPrice(`https://www.amazon.in/dp/${product.productid}`)
        res.push(price)
    }
    // await allproducts.forEach(async(product,index)=>{
    //     await getProductPrice(`https://www.amazon.in/dp/${product.productid}`).then(resprice=>{
    //         console.log(resprice)
    //         res.push(resprice)
    //     }).catch((error)=>{
    //         resarray.push(-1)
    //     })
    // })
    return res
}

export const showAllPrices = async(req,res)=>{
    var res = []
    await showAllPrices2().then((allprices)=>{
        res=allprices
    }).catch((error)=>{
    })
    return res
}