let today = new Date();
let hourNow = today.getHours();
let greeting;

if(hourNow > 18){
    greeting = 'Good evening'
} else if (hourNow > 12){
    greeting = 'Good afternoon'
} else {
    greeting = 'Good morning'
}

document.write(`<h3>${greeting}</h3>`);