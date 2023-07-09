// defineProperty ->  Define uma nova propriedade diretamente ou modifica uma existente em um objeto, retornando o objeto.
// defineProperties -> Define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto.

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // Mostra a chave
        value: estoque,     // Mostra o valor da chave
        writable: true,     // Pode alterar a chave
        configurable: true  // Pode configurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,   // Mostra a chave
            value: nome,     // Mostra o valor da chave
            writable: true,     // Pode alterar a chave
            configurable: true  // Pode configurar a chave
        },
        preco: {
            enumerable: true,   // Mostra a chave
            value: preco,     // Mostra o valor da chave
            writable: true,     // Pode alterar a chave
            configurable: true  // Pode configurar a chave
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}

