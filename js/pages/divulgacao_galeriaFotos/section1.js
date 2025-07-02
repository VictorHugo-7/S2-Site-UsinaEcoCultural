let cardCount = 1;

// CARD - adicionar
function addCard(photoInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <img src="${photoInfo ? photoInfo.imageUrl : '../../../midias/img/global/imagem.svg'}"
                class="my-divulgacao_galeriaFotos-s1-imagem card-image" alt="Imagem do trabalho">
            <div class="card-body">
                <h5 class="card-title">${photoInfo ? photoInfo.title : 'Título'}</h5>
                <p class="card-text text-muted card-description">${photoInfo ? photoInfo.description : 'Descrição'}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-divulgacao_galeriaFotos-s1-index admin-only">${cardCount}</span>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
    cardCount++;
    updateCardIndices();
}

// CARD - atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((card, index) => {
        card.querySelector('.my-divulgacao_galeriaFotos-s1-index').textContent = index + 1;
    });
}

// M0DAL - Excluir
function openDeleteModal() {
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

// CARD - Excluir
function deleteCard() {
    const indexToDelete = parseInt(document.getElementById('deleteIndex').value, 10) - 1;
    const cards = document.querySelectorAll('.card-wrapper');

    if (indexToDelete >= 0 && indexToDelete < cards.length) {
        cards[indexToDelete].remove();
        cardCount--;
        updateCardIndices();

        const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        deleteModal.hide();
    } else {
        alert('Índice inválido. Por favor, escolha um índice de card válido.');
    }
}

// MODAL - Edição
function openEditModal() {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

// Fetch da seção HTML e inicialização
fetch('../../../html/pages/divulgacao_galeriaFotos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_galeriaFotos-s1-importacao').innerHTML = data;

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = parseInt(document.getElementById('editIndex').value, 10) - 1;
            const cards = document.querySelectorAll('.card-wrapper');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];
                const fileInput = document.getElementById('editImage');
                const file = fileInput.files[0];

                const title = document.getElementById('editTitle').value;
                const description = document.getElementById('editDescription').value;

                const updateCardFields = (imageDataUrl) => {
                    if (imageDataUrl) {
                        selectedCard.querySelector('.card-image').src = imageDataUrl;
                    }
                    selectedCard.querySelector('.card-title').innerText = title;
                    selectedCard.querySelector('.card-description').innerText = description;

                    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                    editModal.hide();
                };

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        updateCardFields(e.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    updateCardFields();
                }

            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
