// const axios = require('axios')
import axios from 'axios'
// const cheerio = require('cheerio')
import cheerio from 'cheerio'


const productData = async (product)=>{
    const productlink=product
    let searchlist=[]
    await axios.get(productlink).then(urlResponse=>{
        const $ = cheerio.load(urlResponse.data)
        $('div.s-include-content-margin').each((index,element)=>{
            var title = $(element).find('h2.a-size-mini').find('span.a-size-medium').text()
            title = title.trim()
            const product_id = $(element).find('a.a-link-normal').attr('href')
            let productid_index = product_id.search('dp/')
            let productid=null
            if(productid_index==-1){
                productid_index = product_id.search('dp%')
                productid = product_id.slice(productid_index+5,productid_index+15)
            }
            else{
                productid = product_id.slice(productid_index+3,productid_index+13)
            }
            const producturl = `https://www.amazon.in/dp/${productid}`
            const displayprice = $(element).find('span.a-price-whole').text()
            let price = displayprice
            price = parseInt(price.replace(',',''))
            const image = $(element).find('img.s-image').attr('src')
            if(title && producturl && price && image){
                searchlist.push({
                    title:title,
                    productid:productid,
                    product_id:product_id,
                    producturl:producturl,
                    displayprice:displayprice,
                    price:price,
                    image:image
                })
            }
        })
    }).catch(error=>{
        console.log(error)
    })
    if (searchlist.length==0){
        await axios.get(productlink).then(urlResponse=>{
            const $ = cheerio.load(urlResponse.data)
            $('div.sg-col-4-of-20').each((index,element)=>{
                var title = $(element).find('h2.a-size-mini').find('span.a-size-base-plus').text()
                title = title.trim()
                const product_id = $(element).find('a.a-link-normal').attr('href')
                let productid_index = product_id.search('dp/')
                if(productid_index==-1){
                    productid_index = product_id.search('dp%')
                }
                const productid = product_id.slice(productid_index+3,productid_index+13)
                const producturl = `https://www.amazon.in/dp/${productid}`
                const displayprice = $(element).find('span.a-price-whole').text()
                let price = displayprice
                price = parseInt(price.replace(',',''))
                const image = $(element).find('img.s-image').attr('src')
                if(title && producturl && price && image){
                    searchlist.push({
                        title:title,
                        productid:productid,
                        product_id:product_id,
                        producturl:producturl,
                        displayprice:displayprice,
                        price:price,
                        image:image
                    })
                }
            })
        }).catch(error=>{
            console.log(error)
        })
    }
    return searchlist
}

export const getSearchData = async (req,res)=>{
    const link = req
    const searchData = await productData(link)
    // console.log(searchData.slice(0,3))
    // res.status(200).json(searchData.slice(0,3))
    return searchData
}

// const link='https://www.amazon.in/s?k=macbook'
// printData(link)
