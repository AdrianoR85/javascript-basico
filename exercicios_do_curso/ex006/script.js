function somar(){
    let msg = document.querySelector('div#msg')
    let num1 = Number(prompt("Please Enter the first number"))
    let num2 = Number(prompt('Please Enter the Second number'))
    let sumNum = num1 + num2

    msg.innerHTML = `The sum of <mark>${num1}</mark> + <mark>${num2}</mark> is <strong>${sumNum}</strong>`

}