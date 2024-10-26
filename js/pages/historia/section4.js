fetch('../../../html/pages/historia/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-historia-s4-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
