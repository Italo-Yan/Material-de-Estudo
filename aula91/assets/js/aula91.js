//  const request = obj => {
//      const xhr = new XMLHttpRequest();
//      xhr.open(obj.method, obj.url, true);
//      xhr.send();
//  
//      xhr.addEventListener('load', () => {
//          if(xhr.status >= 200 && xhr.status < 300) {
//              obj.success(xhr.responseText);
//          } else {
//              obj.error(xhr.statusText);
//          }
//      });
//  };

document.addEventListener('click', e => { // Ouve o evento de clique no documento
    const el = e.target; // Obtém o elemento clicado
    const tag = el.tagName.toLowerCase(); // Obtém a tag do elemento em letras minúsculas

    if (tag === 'a') { // Verifica se o elemento é uma âncora (<a>)
        e.preventDefault(); // Impede o comportamento padrão do clique
        carregaPagina(el); // Chama a função para carregar a página, passando o elemento clicado como argumento
    }
});

async function carregaPagina(el) { // Define a função assíncrona para carregar a página
    try {
        const href = el.getAttribute('href'); // Obtém o atributo href do elemento clicado
        const response = await fetch(href); // Faz uma requisição usando fetch para a URL obtida

        if (response.status !== 200) throw new Error('ERRO 404!'); // Verifica se o status da resposta é diferente de 200. Se for, lança um erro

        const html = await response.text(); // Lê a resposta como texto
        carregaResultado(html); // Chama a função para carregar o resultado, passando o HTML obtido como argumento
    } catch(e) {
        console.log(e); // Captura e exibe qualquer erro ocorrido durante o processo
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado'); // Seleciona o elemento com a classe "resultado"
    resultado.innerHTML = response; // Atualiza o conteúdo do elemento com a resposta obtida
}
