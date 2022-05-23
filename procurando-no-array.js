//procurando no array
//includes retorna booleano
//indexOf retorna o índice caso exista, ou retona -1 caso não exista
const alunos = ['Kaio', 'Isa','Carlos']
const mediaDosAlunos = [8,9,6]

let alunosEMediaDosAlunos = [alunos, mediaDosAlunos]

function procuraAluno(nomeDoAluno){
        if(alunosEMediaDosAlunos[0].includes(nomeDoAluno)){
            let indice = alunosEMediaDosAlunos[0].indexOf(nomeDoAluno)
            return `O aluno ${nomeDoAluno} tem média ${alunosEMediaDosAlunos[1][indice]}`
        }else{
            return `O aluno não foi encontrado`
        }

}
console.log(procuraAluno('Lays'))
