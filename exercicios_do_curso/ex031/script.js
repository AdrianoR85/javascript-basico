function contador(){

    let saida = document.getElementById('saida')
    let n = document.getElementById('fn1')
    let num = Number(n.value)

    saida.innerHTML = ``
    saida.innerHTML += `<h2>Tabuado do ${num}</h2>`

    saida.style.background = "#A8DCF4"
    saida.style.width = "200px"


    for(let cont=1; cont <= 10; cont++){
        let result = num * cont
        saida.innerHTML += `${num} x ${cont} = ${ result} <br>`
    }

    n.value = ""
    n.focus()
   
}