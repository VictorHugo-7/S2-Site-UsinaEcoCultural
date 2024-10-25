fetch('../../../html/pages/parcerias/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-parcerias-s3-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));