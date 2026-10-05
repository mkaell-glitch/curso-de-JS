function clicar() {
    var inicio = document.getElementById('txtn')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

      if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } 
      else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
          window.alert('Passo inválido! Considerando PASSO 1')
          p = 1
        }
        if (i < f) {
          //contagem crescente
          for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
          }
        } else {
          //contagem regressiva
          for (var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
          }
        }
      }
    }

