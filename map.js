//método map
const notas = [10,9,8,7,6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : nota + 1)
console.log(notasAtualizadas) // 10,10,7,8,7


//alterando string com map
const nomes = ['Kaio', 'LuCas', 'maria', 'JOANA']
const nomesCorrigidos = nomes.map(nome => nome.toUpperCase())
console.log(nomesCorrigidos)//'KAIO', 'LUCAS', 'MARIA', 'JOANA'