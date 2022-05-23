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
class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
        console.log(`Depósito de ${valor} confirmado na conta do cliente ${this.nome}`)
    }
    sacarPoupanca(valor){
        this.saldoPoupanca -= valor
    }
    exibirSaldoPoupanca(){
        console.log(this.saldoPoupanca)
    }
}

const kaio = new ClientePoupanca('kaio','kaio@email','71827837890',500, 100)

kaio.depositarPoupanca(400)
console.log(`A conta do cliente: ${kaio.nome} tem ${kaio.saldo} na conta e ${kaio.saldoPoupanca} na poupança`)