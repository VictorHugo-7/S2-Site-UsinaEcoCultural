fetch('../../components/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-menu-importacao').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

