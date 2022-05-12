let valores = [ 4,5,6,7,8,9]
//console.log(valores)

/* console.log(valores[0])
for(let pos=0; pos < valores.length; pos++){
    console.log(` a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores)
console.log(`a posição ${pos} tem os valor ${valores[pos]}` )
