let saying = 'Home sweet home'
let msg = '<h2>lenght</h2><p>' + saying.length + '</p>'
msg += '<h2>uppercase</h2><p>' + saying.toLocaleUpperCase() + '</p>'
msg += '<h2>lowercase</h2><p>' + saying.toLocaleLowerCase() + '</p>'
msg += '<h2>character index</h2><p>' + saying.charAt(12) + '</p>'
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>'
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>'
msg += '<h2>character index</h2><p>' + saying.substring(7,14) + '</p>'
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>'

let el = document.getElementById('info')
el.innerHTML = msg
