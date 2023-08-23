function count() {
    let start = window.document.getElementById('istart')
    let end = window.document.getElementById('iend')
    let cadence = window.document.getElementById('icad')
    
    if (start.value.length == 0 || end.value.length == 0 || cadence.value.length == 0 ) {
        window.alert('Erro')
    } else {
        let s = Number(start.value)
        let e = Number(end.value)
        let c = Number(cadence.value)
        if (c <= 0) {
            window.alert('Passo inválido. Considerando psso 1')
            c = 1
        }
        if (e > s) {
            for (let a = s; a <= e; a += c){
                res.innerHTML += `${a} \u{1F449}`
            }
        } else if (s > e) {
            for (let a = s; a >= e; a -= c) {
                res.innerHTML += `${a} \u{1F449}`
            }
        }
    
    }
    res.innerHTML += ` \u{270B}`
}