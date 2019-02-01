const containerEl = document.querySelector("#container")

// containerEl.innerHTML += 

// const bigSpenders = businesses.filter(
//     business => parseInt(business.orders) > 9000)
// console.table(bigSpenders)

const bigSpenders = businesses.filter(business => {
    if (business.orders.find(order => {
     return order > 9000
    })) {
        return business
    }
})
console.log(bigSpenders)


// businesses.forEach(business => {
// let orderTotal = business.orders.reduce(
//     (accumulator, order) => accumulator += order, 0).toFixed(2)
// console.log(orderTotal)
// })