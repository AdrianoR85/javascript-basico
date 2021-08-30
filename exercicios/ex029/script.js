function contador(){

    let num = document.getElementById("txtnumber")
    let saida = document.querySelector('div#saida')
    let n = Number(num.value)

    saida.innerHTML = `<p>contando de 0 até ${n}</p>`
    if(n >=0){
        for(let cont=0; cont <= n; cont++){
            saida.innerHTML += `${cont} \u{1F449}`
        } 
    } else{
        alert('Digite apenas números positivos')
        saida.innerHTML = ''
        
    }
    num.value = ''
    num.focus()
    saida.innerHTML += `\u{1F3C1}`
    

    
}