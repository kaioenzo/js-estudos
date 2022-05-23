class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    //métodos
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        this.saldo -= valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const clienteKaio = new Cliente('kaio', 'kaio@email.com', '82728273',50)
clienteKaio.depositar(2000)
clienteKaio.exibirSaldo()
console.log(clienteKaio)