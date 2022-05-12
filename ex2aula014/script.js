function tabuada() {
    let num = document.getElementById('textn')
    document.getElementById('seltab')
    if(num.value.length == 0){
        Window.alert('Por favor digite um numero')
       }else{ 
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createComment('option')
            item.tex= `${n} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }
  
    
}