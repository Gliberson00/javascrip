function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.ariaValueMax.length == 0 || fim.value.length == 0 || passo.value.length = 0) {
        res.innerHTML = 'impossivel contar!'
        // window.alert('[ERRO] faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando passo um!')
            p = 1
        }
        if(i < f){
            // contagem crescente
            for(let c = i; c <= f; c +=passo){
            res.innerHTML += ` ${c} \ul{1F449}`
        }
        res.innerHTML += `\ul{1F3C1}`
        }else{
            // contagem regressiva
          for( let c = i;c >= f; c-= passo ){ 
          res.innerHTML += `${c} \ul{1F449}`}
          res.innerHTML += `\ul{1F3C1}`

      }
    
}