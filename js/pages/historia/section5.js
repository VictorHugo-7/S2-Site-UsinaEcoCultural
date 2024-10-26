fetch('../../../html/pages/historia/section5.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-historia-s5-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
