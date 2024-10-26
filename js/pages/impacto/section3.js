fetch('../../../html/pages/impacto/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-impacto-s3-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
