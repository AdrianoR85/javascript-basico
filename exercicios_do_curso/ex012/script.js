function clicar(){
    let numero = document.querySelector('input#txtnumero').value
    let msg = document.querySelector('div#msg')

    if(numero % 2 == 0){
        msg.innerHTML = `<p>O número ${numero} é <strong>Par</strong></p>`
    }else {
        msg.innerHTML = `<p>O número ${numero} é <strong>Impar</strong></p>`
    }
    
    
}



