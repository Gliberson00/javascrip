let num = [2,3,4,5,6,7,]
num.push(9)
num.sort()
console.assert(num)
console.log(` O vetor tem ${num.lenght} posições`)
console.log(` o valor do primeiro vetor e ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log('o valor não foi encontrado')
}else{
    console.log( `o valor 8 está na posição ${pos}` )
}
