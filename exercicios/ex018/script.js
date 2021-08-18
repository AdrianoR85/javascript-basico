function calcIdade(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = Number(prompt("Digite o ano que você nasceu"))
    

    let msg = document.querySelector('div#msg')
    if (anoNasc > anoAtual || anoNasc == 0){
        msg.innerHTML = 'Ano Inválido!'
    } else{
        let idade = anoAtual - anoNasc
        msg.innerHTML = `Você nasceu em <strong>${anoNasc}</strong> e tem <strong>${idade}</strong> `
    }


    
}
