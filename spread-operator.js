const clientes = [{
    nome : 'kaio',
    idade: 59,
    cpf: "12345678901",
    saldo : 99999999,
    email: "kaio@email.com",
    telefone: ["61985487878","61985622301"],
    dependentes : [{
        nome: "Sarah",
        parentesco: 'filha',
        data_nascimento: "11/03/2022",
     },
     {
         nome: 'Carlos',
         parentesco: 'filho',
        data_nascimento: '23/05/2022'
     }
    ]
},
{
    nome : 'Mariana',
    idade: 48,
    cpf: "12345678901",
    saldo : 99999999,
    email: "mariana@email.com",
    telefone: ["61985487878","61985622301"],
    dependentes : [{
        nome: "André",
        parentesco: 'Filho',
        data_nascimento: "18/05/2013",
     }]
}
]

 const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
    console.table(listaDeDependentes)


// for(let i=0; i < clientes.length; i++){
//     for(let j=0; j < clientes[i].dependentes.length; j++){
//         console.log(`${clientes[i].dependentes[j].nome} nascido em: ${clientes[i].dependentes[j].data_nascimento} é filha de ${clientes[i].nome}`)
//     }
// }
