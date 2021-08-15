function calcMedia(){
    let msg = document.querySelector('div#msg')
    let nome = prompt('Informe seu nome')
    nome = nome.charAt(0).toLocaleUpperCase() + nome.slice(1)
    let nota1 = Number(prompt("Primeira nota"))
    let nota2 = Number(prompt('Segunda nota'))
    let mediaFinal= (nota1 + nota2) / 2.0

    msg.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong></p>`
    msg.innerHTML += `<p>As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong></p>`
    msg.innerHTML += `<p>A média final é <strong>${mediaFinal.toFixed(1)}</strong></p>`

}