console.log(" trabalhando com listas em js")



const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Brasília`
)

listaDeDestino.push(`Curitiba`)//[ 'Salvador', 'São Paulo', 'Rio de Janeiro', 'Brasília', 'Curitiba' ]

console.log("Destinos possíveis")
console.log(listaDeDestino)

listaDeDestino.splice(3,1)//[ 'Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba' ]
console.log(listaDeDestino)

console.log(listaDeDestino[1], listaDeDestino[2])//São Paulo Rio de Janeiro