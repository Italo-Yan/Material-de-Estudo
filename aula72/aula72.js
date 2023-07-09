// Getter -> Associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.
// Setter -> Liga a propriedade da função para ser chamada quando existe uma tentativa de definir valor para essa propriedade.

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // Mostra a chave
        configurable: true,  // Pode configurar a chave
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
                return;
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
        }
    };
}

//const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
//p1.estoque = 'O valor que eu quero';
//console.log(p1.estoque);
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';

