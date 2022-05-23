//utilizando o método reduce para calcular média
const salaJS=[10,7,5,9]
const salaPHP = [9,8,5,6]

function calculaMedia(notaDosAlunos){
    const media = notaDosAlunos.reduce((acum, atual) => atual + acum,0)
    return media/notaDosAlunos.length
}

console.log(`A média da sala de JavaScript é: ${calculaMedia(salaJS)}`)
console.log(`A média da sala de PHP é: ${calculaMedia(salaPHP)}`)

//calculando média simples
const notas = [10,5,7,7]
const media = notas.reduce((acum, atual) => atual + acum,0) /notas.length
console.log(media)