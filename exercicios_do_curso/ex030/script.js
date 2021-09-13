function contador(){

    let saida = document.getElementById('saida')
    let inicio = Number(document.getElementById('fn1').value)
    let fim = Number(document.getElementById('fn2').value)

    saida.innerHTML = ``
    saida.innerHTML += `<h2>Contando de ${inicio} até ${fim} </h2>`
    if(inicio < fim){
        for(inicio; inicio <= fim; inicio++){
            saida.innerHTML += ` ${inicio} &#x1F449;`
        }
    } else if(inicio > fim){
        for(inicio; inicio >= fim; inicio--){
            saida.innerHTML += ` ${inicio} &#x1F449;`
        }    
    } else {
        saida.innerHTML += 'Os valores são iguais'
    }
    inicio.value = ''
    fim.value = ''
    inicio.focus()
    saida.innerHTML += ` &#x1F3C1;`
}