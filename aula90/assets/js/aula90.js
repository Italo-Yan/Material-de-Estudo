const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); // Abre uma conexão com o método e URL fornecidos
    xhr.send(); // Envia a requisição

    xhr.addEventListener('load', () => { // Ouve o evento de carga da resposta da requisição
        if(xhr.status >= 200 && xhr.status < 300) { // Verifica se o status da resposta é bem-sucedido
            obj.success(xhr.responseText); // Chama a função de sucesso com a resposta de texto como argumento
        } else {
            obj.error(xhr.statusText); // Chama a função de erro com o texto do status da resposta como argumento
        }
    });
};

document.addEventListener('click', e => { // Ouve o evento de clique no documento
    const el = e.target; // Obtém o elemento clicado
    const tag = el.tagName.toLowerCase(); // Obtém a tag do elemento em letras minúsculas

    if (tag === 'a') { // Verifica se o elemento é uma âncora (<a>)
        e.preventDefault(); // Impede o comportamento padrão do clique
        carregaPagina(el); // Chama a função para carregar a página, passando o elemento clicado como argumento
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href'); // Obtém o atributo href do elemento clicado
    
    request({ // Faz uma requisição utilizando a função request
        method: 'GET',
        url: href,
        success(response) { // Função de sucesso: carrega o resultado da resposta
            carregaResultado(response);
        },
        error(errorText) { // Função de erro: exibe uma mensagem de erro no console
            console.log(errorText);
        }
    });

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado'); // Seleciona o elemento com a classe "resultado"
    resultado.innerHTML = response; // Atualiza o conteúdo do elemento com a resposta da requisição
}
