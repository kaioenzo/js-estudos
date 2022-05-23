console.log(" trabalhando com condicionais em js")
const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Brasília`
)
const idadeComprador = 18
const estaAcompanhada = true
let temPassagemComprada = false
const destino = "Brasília"
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true
let destinoExiste = false
console.log(`Destinos possíveis`)
console.log(listaDeDestino)

for(let cont = 0 ; cont < 4 ; cont++){
    if (listaDeDestino[cont] == destino) {
        destinoExiste = true
        break
    }
}
console.log("Destino existe: ", destinoExiste)
if( podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, tivemos um erro!")
}