fetch('../../../html/pages/index/section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-ix-section2').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));