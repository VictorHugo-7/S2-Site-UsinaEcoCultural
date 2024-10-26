fetch('../../../html/pages/impacto/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-impacto-s1-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
