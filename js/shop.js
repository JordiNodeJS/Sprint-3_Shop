const $count_product = document.querySelector('#count_product')
$botoncito = document.querySelector('.btn.btn-outline-dark.flex-center')


// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
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
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = []

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = []

let total = 0

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cartList array
    if (products[i].id == id) {
      cartList.push(products[i])
      $count_product.textContent = cartList.length
    }
  }
  return '👍'
}

// Exercise 2
function cleanCart() {
  cartList.length = 0
  cart.length = 0
  total = 0
  count_product = 0
  $count_product.textContent = count_product
  const $allQuantitySpan = document.querySelectorAll('.text-warning')

  for (const quantity of $allQuantitySpan) {
    quantity.textContent = 0
  }
  console.log(cartList, cart)
  return '🧽'
}

// testing cart

// generateCart(cart)

// calculateTotal(cartList)
// applyPromotionsCart()

// console.table('cartList', cartList)
// console.table('cart', cart)

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price
  }
  console.log('total:', total)
  return '💵'
}

// Exercise 4
function generateCart() {
  for (let i = 0; i < products.length; i++) {
    let count = 0

    for (let j = 0; j < cartList.length; j++) {
      if (products[i].id == cartList[j].id) {
        count = count + 1
        console.table('cartList', cartList[j].id, 'count', count)
      }
    }

    const quantity = { quantity: count }
    const newCartItemQuantity = {
      ...quantity,
      ...products[i],
    }
    if (count > 0) cart.push(newCartItemQuantity)
  }
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  return '🛒'
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  // En aquest exercici has de completar la funció applyPromotionsCart(),
  //  la qual rep el array cart, i calcula les promocions del carret.
  // productos en promodicón ids: 1, 3
  generateCart()

  let subtotalPromocionOli, subtotalPromocionPastis
  for (let i = 0; i < cart.length; i++) {
    // PROMOCIÓN: Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
    if (cart[i].id == 1 && cart[i].quantity >= 3) {
      console.log(cart[i].price, cart[i].quantity)
      subtotalPromocionOli = cart[i].quantity * 10
      console.log('subtotalPromocionOli', subtotalPromocionOli)
      total += subtotalPromocionOli
    }

    // PROMOCiON: En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.
    if (cart[i].id == 3 && cart[i].quantity >= 10) {
      console.log('funciona')
      console.log(cart[i].price, cart[i].quantity)
      subtotalPromocionPastis = cart[i].quantity * cart[i].price * (2 / 3)
      console.log('subtotalPromocionPastis', subtotalPromocionPastis)
      total += subtotalPromocionPastis
    }
  }
  return '🤑'
}

// ** Nivell II **
let count_product = 0

function counterUI(){
    count_product++
    $count_product.textContent = count_product
}
function counterUIremove(){
  count_product--
  $count_product.textContent = count_product
}
// Exercise 7
function addToCart(id) {

  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  for (let i = 0; i < products.length; i++) {
    // busco el producto en el inventario
    if (id == products[i].id) {
      if (cart.length == 0) {
        //compruebo que cart está vacío y creo el producto por primera vez con su quantity a 1
        const productToCart = { ...products[i] }
        productToCart.quantity = 1
        cart.push(productToCart)
        document.querySelector(`#q${productToCart.id}`).textContent = productToCart.quantity

        counterUI()
      } else if (cart.length >= 0) {
        // si en cart hay algún producto
        let exist = false
        for (let i = 0; i < cart.length; i++) {
          // miro si existe ese producto y le sumo uno a la quantity
          if (id == cart[i].id) {
            exist = true
            cart[i].quantity += 1

            document.querySelector(`#q${cart[i].id}`).textContent = cart[i].quantity
            counterUI()
          }
        }
        if (!exist) {
          // si el producto no está en el cart lo añado por primera vez y con la cantidad de 1
          const productToCart = { ...products[i] }
          productToCart.quantity = 1
          cart.push(productToCart)
          document.querySelector(`#q${productToCart.id}`).textContent = productToCart.quantity

          counterUI()
        }
      }
    }
  }

}
// testing aadToCart
// addToCart(2)
// addToCart(2)
// addToCart(2)
// addToCart(2)
// addToCart(3)
// addToCart(3)
// addToCart(1)
// addToCart(1)
// addToCart(1)
// addToCart(1)
console.table('cart', cart)

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  // encuentro el producto que quiero eliminar en la lista de productos
  for (let i = 0; i < products.length; i++) {
    if (id == products[i].id && cart.length >= 0) {
      // una vez encontrado compruebo si está en la cesta
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id && cart[i].quantity > 0) {
          cart[i].quantity -= 1
          document.querySelector(`#q${cart[i].id}`).textContent = cart[i].quantity
          counterUIremove()
          if (cart[i].quantity == 0) cart.splice(i, 1)
        }
      }
    }
  }
}

// testing removeFromCart

// removeFromCart(1)
function totalShop() {
  let subtotalPromocionOli, subtotalPromocionPastis
  for (let i = 0; i < cart.length; i++) {
    // PROMOCIÓN: Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.
    if (cart[i].id == 1 && cart[i].quantity >= 3) {
      console.log(cart[i].price, cart[i].quantity)
      subtotalPromocionOli = cart[i].quantity * 10
      console.log('subtotalPromocionOli', subtotalPromocionOli)
      total += subtotalPromocionOli
    } else if (cart[i].id == 3 && cart[i].quantity >= 10) {
      // PROMOCiON: En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.
      console.log('funciona')
      console.log(cart[i].price, cart[i].quantity)
      subtotalPromocionPastis = cart[i].quantity * cart[i].price * (2 / 3)
      console.log('subtotalPromocionPastis', subtotalPromocionPastis)
      total += subtotalPromocionPastis
    } else total += cart[i].quantity * cart[i].price
  }
}

// Exercise 9
const $cartModalh3 = document.querySelector('#cartModal h3')
$botoncito = document.querySelector('.btn.btn-outline-dark.flex-center')
$botoncito.addEventListener('click', printCart)

function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  total = 0
  totalShop()
  let trs = ''
  for (let i = 0; i < cart.length; i++) {
    trs += `
    <tr>
      <td> ${cart[i].name}</td>
      <td>${cart[i].price}</td>
      <td>${cart[i].quantity}</td>
    </tr>`
  }

  $div = document.getElementById('displayBill')
  $div.innerHTML = `
    <table  class="table">
    <thead>
    <tr>
    <th scope="col">
      Name
    </th>
    <th scope="col">
      Price
    </th>
    <th scope="col">
      Quantity
    </th>
    </tr>
    </thead>
    <tbody> ${trs}
      <tr>
        <td>Total</td>
        <td></td>
        <td colspan="2">${total} €</td>
        </tr>
    </tbody></table>
  `

  $cartModalh3.insertAdjacentElement('afterend', $div)
  $cartModalh3.style.display = 'none'
  // $botoncito.removeEventListener(e.type, printCart)
}

const $closeButton = document.querySelector('.btn-close')
$closeButton.addEventListener('click',() => {
  $cartModalh3.style.display = 'block'
  // document.querySelector('#tableProducts').remove()
  // console.log(document.querySelector('#tableProducts'))

})


function open_modal() {
  console.log('Open Modal')
}

function printQuantity() {
  const $quantity = document.querySelector('#q1')
  const filterCart = cart.filter(e => e.id == 1)
 console.log(filterCart);

  // $quantity.textContent = filterCart[0].quantity
}
