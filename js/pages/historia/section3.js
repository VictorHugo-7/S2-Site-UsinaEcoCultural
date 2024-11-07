fetch('../../../html/pages/historia/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-historia-s3-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
