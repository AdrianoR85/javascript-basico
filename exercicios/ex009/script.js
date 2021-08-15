let msg = document.querySelector('div#msg')
let contador = 0

function contar(){
    contador++
    msg.innerHTML = contador <=1?`O contador está com ${contador} clique`: `O contador está com ${contador} cliques`
}

function limpar(){
    contador = 0
    msg.innerHTML = `O contador está com ${contador} clique`
}