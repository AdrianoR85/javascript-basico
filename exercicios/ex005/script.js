alert('Welcome to my site')
function clicar(){
    var msg = document.querySelector('div#msg')
    var num = prompt("Enter with a number")
    var numDouble = num * 2
    var numHalf = num / 2 

    msg.innerHTML = `Double <strong>${num}</strong> is <strong>${numDouble}</strong> and a half is <strong>${numHalf}</strong>`

}