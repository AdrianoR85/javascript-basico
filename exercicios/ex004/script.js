function clicar(){
    var msg = document.querySelector('div#msg')
    var nome = prompt("What's your name?")

    msg.innerHTML = `Hi, ${nome}! Nice to meet you.`

}