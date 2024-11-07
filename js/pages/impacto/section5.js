fetch('../../../html/pages/impacto/section5.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-impacto-s5-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
