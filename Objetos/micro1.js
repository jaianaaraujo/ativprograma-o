



function Restaurante (nome, ...cardapio){
    this.nome = nome,
    this.cardapio = cardapio,
    this.entrada = function(){
       return `Olá, seja bem vindo ao ${this.name}. Esse é o nosso cardápio: ${this.cardapio}`
    }
}

let tudoGostoso = new Restaurante('Tudo Gostoso', 'Feijão', 'Arroz', 'Farofa', 'Farofão')

console.log(tudoGostoso.entrada())