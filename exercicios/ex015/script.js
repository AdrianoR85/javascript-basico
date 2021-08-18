function relogio(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let msg = document.querySelector('div#msg')
    let data = new Date()

    msg.innerHTML = `<p><strong>Dia: </strong>${data.getDay()}</p> `
    msg.innerHTML += `<p><strong>Mês: </strong>${meses[data.getMonth()]}</p>`
    msg.innerHTML += `<p><strong>Ano: </strong>${data.getFullYear()}</p> `
    msg.innerHTML += `<p><strong>Mês: </strong>${semana[data.getDay()]}</p>`
    msg.innerHTML += `<p><strong>Hora: </strong>${data.getHours()}</p> `
    msg.innerHTML += `<p><strong>Minutos: </strong>${data.getMinutes()}</p>`
    msg.innerHTML += `<p><strong>Segundos: </strong>${data.getSeconds()}</p> `

    
}
