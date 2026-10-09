var num = document.getElementById('num')
var res = document.getElementById('res')
var fin = document.getElementById('fin')
var lista = document.querySelector('select#Vadd')

var valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true

    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function analisar() {
     if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
     } else {
        window.alert("valor ja encontrado na lista ou invalido!")
     }
     num.value = ''
     num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("adicione numeros antes de finalizar!")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior == valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} valores cadastrados. </p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>a media dos valores é ${media}</p>`
    }
}