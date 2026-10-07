let num = [5,3,2,1,6,7]
num.push(8)
num.sort()
console.log(num)
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`o ultimo valor do vetor é: ${num[5]}`)
let pos = num.indexOf(7)

if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor 7 está na posição ${pos}`)
}