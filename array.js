//arrays

// let notas = [10,6,8]
// notas.push(9)
// notas.pop()
// let soma=0;
// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i]
// }
// const media = soma / notas.length
// console.log(media)

//percorrer array com ForEach
// notas.forEach(element => {
//     console.log(element)
// });


//dividindo arrays
// const alunos = ['Maria', 'João', 'Barbára', 'Juliana', 'Leonardo', 'Kaio', 'Kauã']
// const sala1 = alunos.slice(0,alunos.length/2)
// const sala2 = alunos.slice(alunos.length/2)

// console.log(`na sala 1 tem ${sala1} e na sala 2 tem ${sala2} `)


//atualizando arrays
// const alunos = ['Maria', 'João', 'Barbára', 'Juliana', 'Leonardo', 'Kaio', 'Kauã']
// console.log(alunos)
// alunos.splice(4,2,'Isa')//retira 2 da lista e adiciona Isa na posição 4 - mas ela fica na 5 por causa da próxima linha
// alunos.splice(4,0,'William')//adiciona William na posição 4 sem retirar nada da lista
// console.log(alunos) // [ 'Maria', 'João', 'Barbára', 'Juliana', 'Willaim', 'Isa', 'Kauã' ]


//concatenando arrays
// const sala1 = ['Maria', 'João', 'Barbára']
// const sala2 =['Juliana', 'Willaim', 'Isa', 'Kauã' ]

// const salasUnificadas = sala1.concat(sala2)
// console.log(salasUnificadas)


//array com 2 dimensões
// const alunos = ['Kaio', 'Isa', 'Carlos']
// const mediaDosAlunos = [8,9,6]

// let alunosEMediaDosAlunos = [alunos, mediaDosAlunos]

// console.log(`${alunosEMediaDosAlunos[0][1]}, sua média é: ${alunosEMediaDosAlunos[1][1]}`)
