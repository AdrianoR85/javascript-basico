function start(){
    let msg = document.querySelector('div#msg')
    let num1 = Number(prompt("Digite o 1° valor"))
    let num2 = Number(prompt("Digite o 2° valor"))

    msg.innerHTML = `Entre ${num1} e ${num2}. `
    if(num1 > num2){
       msg.innerHTML += `O valor maior é <strong>${num1}</strong>`
    } else if(num1 < num2){
        msg.innerHTML += `O valor maior é <strong>${num2}</strong>`
    } else {
        msg.innerHTML += 'Não há diferença'
    }
}
