let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)

num.sort()
console.log(num)
console.log(`Vetor tem ${num.length} posições`)

/*for(let pos = 0; pos < num.length; pos++ ){
    console.log(`Valor: ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let p = num.indexOf(4)
console.log(`O valor 8 está na posição ${p}`)
