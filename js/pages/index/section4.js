function openEditModalNoticiasAtuais() {
    const editModalNoticiasAtuais = new bootstrap.Modal(document.getElementById('editModalNoticiasAtuais'));
    editModalNoticiasAtuais.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s4-importacao').innerHTML = data;

        // Adiciona o event listener para o botão de salvar no modal de notícia
        document.getElementById('saveChangesBtnNoticiasAtuais').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndexNoticiasAtuais').value) - 1;
            const cards = document.querySelectorAll('.my-index-s4-cardAlteracao');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Pega a URL da imagem e define no card
                const imageUrl = document.getElementById('editImageNoticiasAtuais').value;
                selectedCard.querySelector('.my-index-s4-imagem').src = imageUrl;

                // Atualiza os outros valores do card com os dados do modal
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitleNoticiasAtuais').value;
                selectedCard.querySelector('.card-date').innerText = document.getElementById('editDateNoticiasAtuais').value;
                selectedCard.querySelector('.card-time').innerText = document.getElementById('editTimeNoticiasAtuais').value;
                selectedCard.querySelector('.card-text').innerText = document.getElementById('editDescriptionNoticiasAtuais').value;

                // Atualiza o botão de redirecionamento
                const url = document.getElementById('editUrlNoticiasAtuais').value;
                selectedCard.querySelector('.my-index-s4-btnVerNoticiasAtuais').setAttribute('onclick', `window.open('${url}', '_blank')`);

                // Fecha o modal
                const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalNoticiasAtuais'));
                if (editModalInstance) {
                    editModalInstance.hide();
                }
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
