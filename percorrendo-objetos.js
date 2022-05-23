//Percorrendo objetos
const cliente  = {
    nome : 'kaio',
    idade: 59,
    cpf: "12345678901",
    saldo : 99999999,
    email: "kaio@email.com",
    telefone: ["61985487878","61985622301"],
    dependente : [{
        nome: "sarah",
        parentesco: 'filha',
        data_nascimento: "11/03/2022",
     }],
}

let relatorio = ''
for (const info in cliente) {
    if (typeof cliente[info]==='object' || typeof cliente[info] === 'function') {
        continue
    }else{
        relatorio += `
        ${info} -> ${cliente[info]}
        `
    }
}
console.log(relatorio)