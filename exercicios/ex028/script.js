function contador(){

    let saida = document.querySelector('div#saida')

    saida.innerHTML = '<p>Números de 10 até 1</p>'
    for(let i=10; i>=1; i--){
        saida.innerHTML +=`${i} \u{1F449}`
    }
    saida.innerHTML += `\u{1F3C1}<br>`
}
