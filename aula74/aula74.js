/* 
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ai que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototupy da função construtora que foi usada pada criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada ao topo (null) até encontar (ou não) tal membro.
*/


// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

const pessoa1 = new Pessoa('Luiz', "O.");   // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', "A.");   // <- Pessoa = Função construtora
const data = new Date();  // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);