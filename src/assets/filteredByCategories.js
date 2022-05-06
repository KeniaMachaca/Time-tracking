import productList from '../productAPI'


const List = []

let product
for (let index = 0; index < productList.length; index++) {

    product = productList[index]

    if (product.category === 'Work') {
        List.push(product)
    } else {
        List.push(product)
    }
}

export {
    List
}