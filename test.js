const products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty',
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty',
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty',
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes',
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes',
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes',
  },
]

let cart = []
const clothes = {
  id: 9,
  name: 'Toddler Frock',
  price: 9.99,
  type: 'clothes',
}
const clothes2 = {
  id: 9,
  name: 'Pijama',
  price: 10.99,
  type: 'clothes',
}



const productToCart = { ...products[0] }
productToCart.quantity = 1

cart = [productToCart]
const arraycloth = [clothes]

cart = [...cart, ...arraycloth]

// cart.push(productToCart)
// const cart2 = [clothes2, clothes]

console.log(cart)
// cart.length = 0
// console.log(cart.length)

// let cars = ['Ford', 'Seat', 'Renault']

// // console.log(cars);
// const otherCar = ['Toyota']
// const cars2 = [cars, ...otherCar]
// console.log(cars);

const names = ['Joe', 'John', 'David', 'Smith', 'James']
console.log(names);

for (let i = 0; i < names.length; i++) {
  if (names[i] == 'David') names.splice(i, 1)
}
console.log(names);
