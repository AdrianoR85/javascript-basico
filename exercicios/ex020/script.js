function calcular(){
    let num1 = Number(prompt('Digite o 1° valar:'))
    let num2 = Number(prompt('Digite o 2° valor'))
    let operador = Number(prompt(`Valores informados: ${num1} e ${num2}\nEscolha a Operção: \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir `))
    let saida = document.querySelector('div#saida')

    saida.innerHTML = 'Calculando...\n'
    switch(operador){
        case 1:
            saida.textContent += `${num1} + ${num2} = ${num1+num2}` 
            break
        case 2:
            saida.textContent += `${num1} - ${num2} = ${num1-num2}`
            break
        case 3 :
            saida.textContent += `${num1} * ${num2} = ${num1*num2}`
            break
        case 4:
            saida.textContent += `${num1} / ${num2} = ${num1/num2}`
            break
        default:
            saida.innerHTML = '<p>Opções inválidas</p>'
    }
}
