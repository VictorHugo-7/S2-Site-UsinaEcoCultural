fetch('../../../html/pages/doacao/section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-doacao-s2-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
