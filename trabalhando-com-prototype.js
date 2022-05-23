function Cliente (nome,cpf,email,saldo){
    this.nome= nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        return this.saldo += valor
    }
}
const clienteKaio = new Cliente('Kaio', '04685545512012','kaio@emai.com',200)

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
ClientePoupanca.prototype.sacarPoup = function(valor){
    this.saldoPoup -= valor
}
 const clienteAna = new ClientePoupanca('Ana','25556248545','ana@email.com',500,1000)
clienteAna.depositarPoup(100)
clienteAna.sacarPoup(300)
clienteAna.depositar(100)
 console.log(clienteAna)