console.log(" trabalhando com condicionais em js")
const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Brasília`
)
const idadeComprador = 11
const estaAcompanhada = false
let temPassagemComprada = false

console.log(`Destinos possíveis`)
console.log(listaDeDestino)

if (idadeComprador >= 18 || estaAcompanhada) {
    listaDeDestino.splice(3, 1)
    temPassagemComprada=true
    console.log("Comprador maior de idade ou está acompanhado de maior de idade")
    console.log(listaDeDestino)
} else {
    console.log("Comprador menor de idade")
}


console.log("Embarque: \n")
if(idadeComprador>18 && temPassagemComprada){
    console.log("Boa Viagem")
}else{
    console.log("Você não pode embarcar")
}