fetch('../../../html/pages/parcerias/section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-parcerias-s2-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));