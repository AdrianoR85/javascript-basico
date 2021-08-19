function gerar(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    let msg = document.querySelector('div#msg')
    msg.innerHTML += `<p>O número que estou pensando é: ${num}</p>`
}

function limpar(){
    let msg = document.querySelector('div#msg')
    msg.innerHTML = null
    msg.innerHTML = 'Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.'
}
