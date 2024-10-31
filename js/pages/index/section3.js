function openEditModalEventoPróximos() {
    const editModalEventoPróximos = new bootstrap.Modal(document.getElementById('editModalEventosProximos'));
    editModalEventoPróximos.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s3-importacao').innerHTML = data;

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtnEventosProximos').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndexEventosProximos').value) - 1; 
            const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Pega a URL da imagem e define no card
                const imageUrl = document.getElementById('editImageUrlEventosProximos').value;
                selectedCard.querySelector('.my-index-s3-imagem').src = imageUrl;

                // Atualiza os outros valores do card com os dados do modal
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitleEventosProximos').value;
                selectedCard.querySelector('.card-date').innerText = document.getElementById('editDateEventosProximos').value;
                selectedCard.querySelector('.card-time').innerText = document.getElementById('editTimeEventosProximos').value;
                selectedCard.querySelector('.card-location').innerText = document.getElementById('editLocationEventosProximos').value;
                selectedCard.querySelector('.card-price').innerText = "R$ " + document.getElementById('editPriceEventosProximos').value;
                selectedCard.querySelector('.card-text').innerText = document.getElementById('editDescriptionEventosProximos').value;

                // Atualiza o botão de redirecionamento
                const url = document.getElementById('editUrlEventosProximos').value;
                selectedCard.querySelector('.my-index-s3-btnVerEventosProximos').setAttribute('onclick', `window.open('${url}', '_blank')`);

                // Fecha o modal
                const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalEventosProximos'));
                if (editModalInstance) {
                    editModalInstance.hide();
                }
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
