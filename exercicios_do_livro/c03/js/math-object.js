let randomNumber = Math.floor((Math.random() * 10 ) + 1 )
let el = document.getElementById('info')
el.innerHTML =  '<h2>random</h2><p>' + randomNumber + '</p>'