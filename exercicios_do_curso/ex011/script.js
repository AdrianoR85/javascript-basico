function calcular(){
    let nome = document.querySelector('input#txtname').value
    let nota1 = Number(document.querySelector('input#txtnota1').value)
    let nota2 = Number(document.querySelector('input#txtnota2').value)
    let media = (nota1 + nota2) / 2
    let msg = document.querySelector('div#msg')

    msg.innerHTML = `<p>Média de ${nome}: ${media}</p>`
    if(media >= 7){
        msg.innerHTML += '<p>APROVADO. Parabens!</p>'
    }else {
        msg.innerHTML += '<p>REPROVADO. Precisar estudar mais!</p>'
    }
}



