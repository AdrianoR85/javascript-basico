function contador(){
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passos = document.getElementById('txtPasso')

    let msg = document.getElementById('msg')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ){
        alert("[ERRO] Insira os Dados")
        msg.innerHTML = 'Impossível contar'
    } else {
        msg.innerHTML = '<p>Contando...</p>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if(p <= 0){
            alert('Passo inválido considerando o PASSO com 1')
            p = 1
        }
        
        if(i < f){
            for(i; i <= f; i += p){
                msg.innerHTML += `${i} \u{1F449}`
                }
        } else if(i > f){
            for(i; i >= f; i -= p){
                msg.innerHTML += `${i} \u{1F449}`
                }
        } else{
            alert('[ERRO] Insira os dados de INICIO e FIM diferentes')
        }
        msg.innerHTML+= '\u{1F3C1}'
    }
    
}

