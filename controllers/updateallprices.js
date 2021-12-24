import { getProductPrice } from '../data/price.js'
import { Product } from '../models/saveProduct.js'
import { updaterecord } from './updaterecord.js'

export const updateAllPrices = async()=>{
    const allproducts = await Product.find()
    // // console.log(allproducts)
    // var res=[]
    // for (let i=0;i<allproducts.length;i++){
    //     const product = allproducts[i]
    //     const price = await getProductPrice(`https://www.amazon.in/dp/${product.productid}`)
    //     product.record.push({value:price})
    //     product.save()
    // }
    allproducts.forEach(async(product,index)=>{
        await getProductPrice(`https://www.amazon.in/dp/${product.productid}`).then(price=>{
            // console.log(resprice)
            // res.push(resprice)
            // if(price!=null){
            //     product.record.push({value:price})
            //     product.save()
            // }
            // else{
            //     let entry = product.record[product.record.length].value
            //     product.record.push({value:entry})
            //     product.save()
            // }
            // product.record.push({value:price})
            // product.save()
            updaterecord(product,price)
        }).catch((error)=>{
        })
    })
    return 'updated'
}

// export const updateAllPrices = async(req,res)=>{
//     var res = []
//     await updateAllPrices2().then((allprices)=>{
//         res=allprices
//     }).catch((error)=>{
//     })
//     return res
// }