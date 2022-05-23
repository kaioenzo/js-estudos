//método filter
const alunos = ['Kaio', 'Maria', 'Helena', 'Gerson']
const notas = [9, 8.8, 5, 6.5]

const reprovados = alunos.filter( (aluno,indice) => notas[indice] < 6 )
console.log(reprovados)//Helena
