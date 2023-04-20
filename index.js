// global viable
const menuItem = document.getElementById("menu-items")
const dishImg = document.getElementById("dish-image")
const dishText = document.getElementById("dish-text")
const dishName = document.getElementById('dish-name')
const dishDes = document.getElementById("dish-description")
const dishPrice = document.getElementById('dish-price')
const cartForm = document.getElementById('cart-form')
const cartNumber = document.getElementById('number-in-cart')
const totalNumber = document.getElementById('Total-number-in-cart')

// #1: fetch data
// fetch the menu
const fetchData = () => {
    fetch("http://localhost:3000/menu")
    .then(resp => resp.json())
    // .then(dishes => {debugger})
    .then(dishes => {
        renderDetail(dishes[0])
        dishes.forEach(dish => displayMenu(dish))
    })
}
fetchData()

// display at #menu-items
const displayMenu = (dishItem) => {
    const dishSpan = document.createElement('span')
    menuItem.appendChild(dishSpan)
    dishSpan.textContent = dishItem.name
    // #3: add click event listener to each dish
    dishSpan.addEventListener('click', () => renderDetail(dishItem))
}

// #2: set a default display
const renderDetail = (dish) => {
    dishImg.src = dish['image']
    dishName.textContent = dish['name']
    dishDes.textContent = dish['description']
    dishPrice.textContent = dish['price']
}

// #4: add menu item to cart
const addCart = () => {
    cartForm.addEventListener('submit', (e) => {
        e.preventDefault()
        cartNumber.innerText = e.target['cart-amount'].value
        totalNumber.innerText = Number(totalNumber.innerText) + Number(e.target['cart-amount'].value)
    })
}
addCart()
