var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas.`)
if (hora > 5) {
    console.log("boa manha!")
}
else if (hora >= 12) {
    console.log("boa tarde!")
}
else if (hora >= 19) {
    console.log("boa noite!")
}
else {
    console.log("boa madrugada!")
}