function verity() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var res = document.getElementById('res')
    if (fano.value.length < 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade} anos.`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança_M.jpg')
                if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'adolescente_M.jpg')
                }
                if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto_M.jpg')
                }
                else {
                    //idoso
                    img.setAttribute('src', 'idoso_M.jpg')
                }
            }
        }
        else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança_F.jpg')
                if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jadolescente_F.jpg')
                }
                if (idade < 50) {
                    //adulta
                    img.setAttribute('src', 'adulta.png')
                }
                else {
                    //idosa
                    img.setAttribute('src', 'idosa.jpg')
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}