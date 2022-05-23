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
clienteKaio.depositar(300)
console.log(clienteKaio)