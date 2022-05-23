class Cliente{
    #saldo//define como privado
    constructor(nome,cpf,saldo){
        this.nome = nome
        this.cpf = cpf
        this.#saldo = saldo
    }
    exibirSaldo(){
        return this.#saldo
    }
}

const kaio = new Cliente('kaio','983293',1000)
kaio.saldo=900
console.log(kaio.exibirSaldo())