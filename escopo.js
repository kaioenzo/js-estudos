let nomeUsuario
var nome2
function nome(){
    nome2 = "enzo"//não pode ser acessado fora do escopo da função
    nomeUsuario = "kaio" //pode ser acessado fora do escopo da função
    return  nome2
}

nome()
console.log(nomeUsuario)//exibe normalmente
//console.log(nome2)//erro por n ter sido definido a variavel nome 2, já q ela está com o escopo de função