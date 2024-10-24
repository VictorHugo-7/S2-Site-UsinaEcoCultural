function openEditModalNoticia() {
    const editModal4 = new bootstrap.Modal(document.getElementById('teste')); // Certifique-se de usar o ID correto
    editModal4.show();
}


// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s4-importacao').innerHTML = data;

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndex').value) - 1; // Pega o índice (1-based)
            const cards = document.querySelectorAll('.my-index-s4-cardAlteracao');

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
                selectedCard.querySelector('.card-text').innerText = document.getElementById('editDescription').value;

                // Atualiza o botão de redirecionamento
                const url = document.getElementById('editUrl').value;
                selectedCard.querySelector('.my-index-s4-btnVerNoticia').setAttribute('onclick', `window.open('${url}', '_blank')`);

                // Fecha o modal
                const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModal4'));
                if (editModalInstance) {
                    editModalInstance.hide();
                }
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
