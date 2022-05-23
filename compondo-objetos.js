//Compondo objeto com objeto aninhado
// const cliente  = {
//     nome : 'kaio',
//     idade: 18,
//     cpf: "12345678901",
//     saldo : 99999999,
//     email: "kaio@email.com"
// }

// cliente.dependentes =  {
//     nome: "sarah",
//     parentesco: 'filha',
//     data_nascimento: "11/03/2022",
// }
// console.log(cliente.dependentes)



//Array dentro como valor do objeto
const cliente  = {
    nome : 'kaio',
    idade: 59,
    cpf: "12345678901",
    saldo : 99999999,
    email: "kaio@email.com",
    dependente : [{
        nome: "sarah",
        parentesco: 'filha',
        data_nascimento: "11/03/2022",
     }],
     saldo: 1000,
     depositar: function(){
         this.saldo += 30
     },
     sacar: function(){
         this.saldo -= valor
     }
}

cliente.dependente.push({
    nome: 'ekko',
    parentesco: 'filho',
    data_nascimento: '23/05/1999'
})
cliente.depositar
console.log(cliente.saldo)