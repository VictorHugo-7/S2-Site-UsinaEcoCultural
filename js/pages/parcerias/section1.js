fetch('../../../html/pages/parcerias/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-parcerias-s1-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));