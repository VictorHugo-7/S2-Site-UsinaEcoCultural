fetch('../../../html/pages/historia/section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-historia-s2-importacao').innerHTML = data;


    })
    .catch(error => console.error('Erro ao carregar a página:', error));
