let numero = document.querySelector('input#txtnumber')
let lista = document.querySelector('select#flista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(!isNumero(numero.value)){
        alert('Digite um valor entre 1 e 100')
    } else if (inLista(numero.value, valores)){
        alert('Valor já existe na lista.')
    } else {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicionar valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } 
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        } 
        let media = soma / total
        resultado.innerHTML = ""
        resultado.innerHTML += `<p>Tem ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor é ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor é ${menor}.</p>`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`
    }
}

