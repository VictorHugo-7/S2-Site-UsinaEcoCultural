fetch('../../../html/pages/politicaDePrivacidade/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-politicaDePrivacidade-s1-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));