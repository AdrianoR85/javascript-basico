function calcular(){
    let msg = document.querySelector('div#msg')
    let num = Number(prompt("Digite um número"))

    msg.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p><hr>`
    msg.innerHTML += `<p>O valor absoluto é ${Math.abs(num)}</p>`
    msg.innerHTML += `<p>A sua parte interira é ${Math.trunc(num)}</p>`
    msg.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(num)}</p>`
    msg.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`
    msg.innerHTML += `<p>A sua rais cúbica é ${Math.cbrt(num)}</p>`
    msg.innerHTML += `<p>O valor de ${num}² é ${Math.pow(num,2)}</p>`
    msg.innerHTML += `<p>O valor de ${num}³ é ${Math.pow(num,3)}</p>`
   
}