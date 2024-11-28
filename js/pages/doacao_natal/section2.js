fetch('../../../html/pages/doacao_natal/section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-doacao_natal-s2-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
