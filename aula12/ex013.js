var agora = new Date()
var DiaSem = agora.getDay()

/*
 0 = domingo
 1 = segunda
 2 = terça
 3 = quarta
 4 = quinta
 5 = sexta
 6 = sabado
*/ 

//console.log(DiaSem)

switch(DiaSem) {
    case 0:
        console.log('hoje e domingo!')
        break
    case 1:
        console.log('hoje e segunda!')
        break
    case 2:
        console.log('hoje e terça!')
        break
    case 3:
        console.log('hoje e quarta!')
        break
    case 4:
        console.log('hoje e quinta!')
        break
    case 5:
        console.log('hoje e sexta!')
        break
    case 6:
        console.log('hoje e sabado!')
        break
    default :
    console.log("[ERROR] dia invalido!")
}