let originalNumber = 10.23456;

let msg = '<h2>Original Number</h2><p>' + originalNumber + '</p>'
msg += '<h2>toFixed</h2><p>' + originalNumber.toFixed(3) + '</p>'
msg += '<h2>toPrecision</h2><p>' + originalNumber.toPrecision(3) + '</p>'

let el = document.getElementById('info')
el.innerHTML = msg

 