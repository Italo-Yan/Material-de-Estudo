// Função construtora -> Retorna objetos
// Função fábrica -> Retorna objetos
// Construtora -> Pessoa (new)
// new -> Cria um objeto vazio e depois retorna ela

function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function() {
        
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

    // Função construtora sempre tem que ter a palavra 'new'
const p1= new Pessoa('Italo', 'Mendes');
const p2= new Pessoa('Yan', 'Silva');

p2.metodo();