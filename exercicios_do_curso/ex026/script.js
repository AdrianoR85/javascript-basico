function contador(){

    let saida = document.querySelector('div#saida')

    for(let i=1; i<=10; i++){
        if(i % 2 == 0){
            saida.innerHTML +=`<mark>${i}</mark> \u{1F449}`
        } else {
            saida.innerHTML +=`${i} \u{1F449}`
        }
        
    }
    saida.innerHTML += `\u{1F3C1}<br>`
}
