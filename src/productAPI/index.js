


const activity = ['Work', 'Play','Study','Exercise','Social','Self Care']
const hour = ['32hrs', '10hrs', '4hrs', '4hrs', '5hrs', '2hrs']
const week = ['Last Week - 36hrs', 'Last Week - 8hrs', 'Last Week - 7hrs', 'Last Week - 4hrs', 'Last Week - 5hrs', 'Last Week - 2hrs']
const ima = ['ima-wo','ima-pl','ima-st','ima-ex','ima-so','ima-se']
const back = ['naranja','celeste','rojo','verde','morado','amarillo']

const productList = []

for (let index = 0; index < 6; index++) {
    const newProduct = {
        activity: activity[index], 
        hour: hour[index],
        week: week[index],
        ima: ima[index],
        back: back[index]
    }
    productList.push(newProduct)
}


module.exports = productList