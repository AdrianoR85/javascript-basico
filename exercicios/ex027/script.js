function contador(){

    let saida = document.querySelector('div#saida')

    saida.innerHTML = '<p>Números pares de 1 até 10</p>'
    for(let i=1; i<=10; i++){
        if(i % 2 == 0){
            saida.innerHTML +=`${i} \u{1F449}`
        }
    }
    saida.innerHTML += `\u{1F3C1}<br>`
}
