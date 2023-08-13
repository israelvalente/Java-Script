function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#edc68d'
        img.src = 'morn.png'
        //bom dia!
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#dadde4'
        img.src = 'after.png'
        //boa tarde!
    } else {
        img.src = 'nigh.png'
        document.body.style.background = '#0a1d23'
        //boa noite!
    }
}
