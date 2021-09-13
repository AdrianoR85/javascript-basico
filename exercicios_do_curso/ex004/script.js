function clicar(){
    var msg = document.querySelector('div#msg')
    var nome = prompt("What's your name?")

    msg.innerHTML = `Hi, <strong>${nome}</strong>! Nice to meet you! &#x1F596;`

}