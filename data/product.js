// const axios = require('axios')
import axios from 'axios'
// const cheerio = require('cheerio')
import cheerio from 'cheerio'
import { Product } from '../models/saveProduct.js'

const fetchProductData = async (props)=>{
    const productlink=props[0]
    const productid=props[1]
    let title=props[2]
    let productprice=props[3]
    let imageurl= 'https://ak.picdn.net/shutterstock/videos/1033397360/thumb/12.jpg?ip=x480'
    let displayprice=productprice
    let price=productprice
    let productsaved=false
    await axios.get(productlink).then(urlResponse=>{
        const $ = cheerio.load(urlResponse.data)
        // title = $('div#titleSection').find('h1#title').find('span#productTitle').text()
        // title = title.trim()
        // console.log(title)
        // imageurl= $('div#main-image-container').find('li.itemNo0').find('span.a-list-item').find('div.a-declarative').find('div#imgTagWrapperId').find('img#landingImage').attr('src')
        imageurl = $('img#landingImage').attr('src')
        // price = $('span#priceblock_ourprice').text()
        // displayprice = $('div#price').find('tr#priceblock_ourprice_row').find('span#priceblock_ourprice').text()
        // displayprice = $('div#apex_desktop').find('div#corePrice_desktop').find('div.a-section')[0].find('span[data-a-color="price"]')[0].find('span.a-offscreen').text()
        // displayprice='price'
        // if(displayprice==""){
        //     displayprice = $('div#price').find('tr#priceblock_dealprice_row').find('span#priceblock_dealprice').text()
        // }
    }).catch(error=>{
    })
    while(price.search(',')!=-1){
        price = price.replace(',','')
    }
    // price = parseInt(price.slice(1,price.length))
    const product = await Product.findOne({productid:productid})
    if(product!=null){
        productsaved=true
    }
    return {
        title:title,
        productid:productid,
        image:imageurl,
        displayprice:displayprice,
        price:price,
        producturl:productlink,
        productsaved:productsaved,
    }
}

// async function printData(product){
//     const ans = await productData(product)
//     console.log(ans)
// }

// const link='https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_4?keywords=macbook&qid=1636143890&qsid=261-2893725-6950753&sr=8-4&sres=B08N5WRWNW%2CB08N5W4NNB%2CB0883J5XXF%2CB09JR4ZM9L%2CB08SXBJH21%2CB0842Z99KY%2CB07KGVMWKX%2CB0943RXTJT%2CB08BJHDKC9%2CB09GMWBZBS%2CB098NQQVT2%2CB091CMZRR9%2CB098XLXDRS%2CB09CMM1XBZ%2CB09BRCKLLR%2CB09FL5CK19&srpt=NOTEBOOK_COMPUTER/'
// printData(link)


export const getProductData = async (link,id)=>{
    const productlink = link
    const productid = id
    const productData = await fetchProductData(productlink,productid)
    // console.log(searchData.slice(0,3))
    // res.status(200).json(searchData.slice(0,3))
    return productData
}