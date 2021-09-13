let min = 1
let max = 100
let dif = max - min
let aleatorio = Math.random()
let num = min + Math.trunc(dif * aleatorio)

let msg = document.querySelector('div#msg')

function gerar(){
    let numJogador = Number(prompt("Qual é o seu palpite?"))

    if(numJogador < num){
        msg.innerHTML += `<p>Você falou ${numJogador}. Meu número é <strong>MAIOR</strong></p>`
    } else if(numJogador > num){
        msg.innerHTML += `<p>Você falou ${numJogador}. Meu número é <strong>MENOR</strong></p>`
    } else{
        msg.innerHTML += `<p><strong>PARABÈNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}</p>`
    }
    
}

function limpar(){
    msg.innerHTML = null
    msg.innerHTML = 'Já pensei em um número entre 1 e 100.'
}
