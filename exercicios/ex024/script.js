function tabuada(){
    let num = document.getElementById('txtnumber')
    let tabuada = document.getElementById('seltabuada')

    if(num.value.length == 0){
        alert('Digite um número')
    } else{
        num = Number(num.value)
        tabuada.innerHTML = ''

        for(var i= 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`  
            item.value = `tabuada${i}`
            tabuada.appendChild(item)
        }
    }
    
    
}