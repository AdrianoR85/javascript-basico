let subtotal = (13 + 1) * 5
let shipping = 0.5 * (13 + 1)
let total = subtotal * shipping

let elSub = document.getElementById('subtotal')
let elShip = document.getElementById('shipping')
let elTotal = document.getElementById('total')

elSub.textContent = subtotal;
elShip.textContent = shipping;
elTotal.textContent = total;