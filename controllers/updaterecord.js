export const updaterecord=(product,price)=>{
    try{
        if(product.record.length>=30){
            product.record.shift()
        }
        if (price!=null){
            product.record.push({value:price})
        }
        else{
            const lastprice = product.record[product.record.length-1].value
            product.record.push({value:lastprice})
        }
        product.save()
        }
    catch{}
    return
}