function openEditModal() {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s3-importacao').innerHTML = data;

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndex').value) - 1; // Pega o índice (1-based)
            const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Verifica se foi selecionado um arquivo de imagem
                const imageInput = document.getElementById('editImage');
                if (imageInput.files && imageInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        selectedCard.querySelector('.card-image').src = e.target.result; // Atualiza a imagem do card
                    };
                    reader.readAsDataURL(imageInput.files[0]);
                }

                // Atualiza os outros valores do card com os dados do modal
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitle').value;
                selectedCard.querySelector('.card-date').innerText = document.getElementById('editDate').value;
                selectedCard.querySelector('.card-time').innerText = document.getElementById('editTime').value;
                selectedCard.querySelector('.card-location').innerText = document.getElementById('editLocation').value;
                selectedCard.querySelector('.card-price').innerText = "R$ " + document.getElementById('editPrice').value;
                selectedCard.querySelector('.card-text').innerText = document.getElementById('editDescription').value;

                // Atualiza o botão de redirecionamento
                const url = document.getElementById('editUrl').value;
                selectedCard.querySelector('.my-index-s3-btnVerEventos').setAttribute('onclick', `window.open('${url}', '_blank')`);

                // Fecha o modal
                const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                if (editModalInstance) {
                    editModalInstance.hide();
                }
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
