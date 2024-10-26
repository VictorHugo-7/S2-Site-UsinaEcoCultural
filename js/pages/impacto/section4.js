fetch('../../../html/pages/impacto/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-impacto-s4-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
