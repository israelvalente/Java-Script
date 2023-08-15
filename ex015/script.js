function tocheck() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.legth == 0 || Number(fyear.value) > year) {
        window.alert('[Error!] Try again.')
    } else {
        var fgen = document.getElementsByName('radgen')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'pic')
        if (fgen[0].checked) {
            gender = 'Man'
            if (age > 0 && age < 10) {
                img.setAttribute('src', 'boy.png')
            } else if (age < 21) {
                img.setAttribute('src', 'youngboy.png')
            } else if (age < 50) {
                img.setAttribute('src', 'man.png')
            } else {
                img.setAttribute('src', 'grampa.png')
            }
        } else if (fgen[1].checked) {
            gender = 'Woman'
            if (age > 0 && age < 10) {
                img.setAttribute('src', 'girl.png')
            } else if (age < 21) {
                img.setAttribute('src', 'younggirl.png')
            } else if (age < 50) {
                img.setAttribute('src', 'woman.jpg')
            } else {
                img.setAttribute('src', 'gramma.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We had detected ${gender} with ${age} years old`
        res.appendChild(img)
    }
}