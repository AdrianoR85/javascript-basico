function addZero(min){
    if(min < 10){
        min = '0' + min;
    } 
    return min;
}

function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem')
    var date = new Date();
    var hora = date.getHours();
    var minuto = addZero(date.getMinutes());
    
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if(hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#b9846f"
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = "#515154"
    }
}