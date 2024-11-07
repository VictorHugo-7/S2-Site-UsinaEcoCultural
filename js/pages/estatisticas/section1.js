fetch('../../../html/pages/estatisticas/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-estatisticas-s1-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));