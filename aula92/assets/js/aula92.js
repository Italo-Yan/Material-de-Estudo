//  fetch('pessoas.json')
//      .then(resposta => resposta.json())
//      .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    // Cria um elemento <table> para armazenar os dados
    const table = document.createElement('table');

    // Loop através de cada objeto "pessoa" no JSON
    for(let pessoa of json) {
        // Cria um elemento <tr> para cada pessoa (linha da tabela)
        const tr = document.createElement('tr');

        // Cria um elemento <td> para o nome da pessoa
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        // Cria um elemento <td> para a idade da pessoa
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        // Cria um elemento <td> para o salário da pessoa
        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        // Adiciona a linha completa à tabela
        table.appendChild(tr);
    }

    // Encontra o elemento HTML com a classe "resultado"
    const resultado = document.querySelector('.resultado');

    // Adiciona a tabela completa ao elemento "resultado"
    resultado.appendChild(table);
}

