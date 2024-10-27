fetch('../../../html/pages/ajuda/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-ajuda-s1-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));