//Método de objetos
const cliente  = {
    nome : 'kaio',
    idade: 59,
    cpf: "12345678901",
    saldo : 99999999,
    email: "kaio@email.com",
    telefone: ["61985487878","61985622301"],
    dependentes : [{
        nome: "sarah",
        parentesco: 'filha',
        data_nascimento: "11/03/2022",
     }],
}


function oferecerSeguro(objeto){
    const propsCliente = Object.keys(objeto)
    if (propsCliente.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${objeto.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)