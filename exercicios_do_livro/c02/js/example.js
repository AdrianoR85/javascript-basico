let greeting = 'Howdy'
let name = 'Molly'
let message = 'please check your order:'
let welcome = greeting + " " + name + " "+ message

let sign = 'Montague House'
let tiles = sign.length
let subTotal = tiles * 5
let shipping = 7
let total = subTotal * shipping

let el = document.getElementById('greeting')
let elSign = document.getElementById('userSign')
let elTiles = document.getElementById('tiles')
let elSub = document.getElementById('subtotal')
let elShip = document.getElementById('shipping')
let elTotal = document.getElementById('grandTotal')

el.textContent = welcome
elSign.textContent = sign
elTiles.textContent = '$' + tiles
elSub.textContent = '$' + subTotal
elShip.textContent = '$' + shipping
elTotal.textContent = '$' + total
