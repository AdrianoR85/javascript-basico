function fatorial(){

    let saida = document.getElementById('saida')
    let n = document.getElementById('fn1')
    let num = Number(n.value)
    let fat = 1

    saida.innerHTML = ``
    saida.innerHTML += `<h2>Fatorial de ${num}!</h2>`

    saida.style.background = "#A8DCF4"

    for(let cont = num; cont > 1; cont--){
        fat *= cont
        saida.innerHTML += `${cont} x `
    }

    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    n.value = ""
    n.focus()
   
}