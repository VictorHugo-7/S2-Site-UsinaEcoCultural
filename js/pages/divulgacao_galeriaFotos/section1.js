let cardCount = localStorage.getItem('photoCardCount') ? parseInt(localStorage.getItem('photoCardCount')) : 1;

// Function to save photo cards to local storage
function savePhotosToLocalStorage() {
    const cards = document.querySelectorAll('.card-wrapper');
    const photoData = Array.from(cards).map(card => {
        return {
            imageUrl: card.querySelector('.card-image').src,
            title: card.querySelector('.card-title').textContent,
            description: card.querySelector('.card-description').textContent
        };
    });
    localStorage.setItem('photoCards', JSON.stringify(photoData));
    localStorage.setItem('photoCardCount', cardCount);
}

// Function to load photo cards from local storage
function loadPhotosFromLocalStorage() {
    const savedPhotos = localStorage.getItem('photoCards');
    if (savedPhotos) {
        const cardContainer = document.getElementById('cards-container');
        cardContainer.innerHTML = ''; // Clear existing cards

        const photoData = JSON.parse(savedPhotos);
        photoData.forEach(photo => {
            addCard(photo);
        });
    }
}

// CARD - adicionar
function addCard(photoInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    // Card HTML com o índice correto atualizado
    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <img src="${photoInfo ? photoInfo.imageUrl : '../../../midias/img/global/imagem.svg'}"
                class="my-divulgacao_galeriaFotos-s1-imagem card-image" alt="Imagem do trabalho">
            <div class="card-body">
                <h5 class="card-title">${photoInfo ? photoInfo.title : 'Título'}</h5>
                <p class="card-text text-muted card-description">${photoInfo ? photoInfo.description : 'Descrição'}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-divulgacao_galeriaFotos-s1-index admin-only">1</span>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
    cardCount++; // Incrementa o contador de cards
    updateCardIndices(); // Atualiza todos os índices após a adição
    savePhotosToLocalStorage(); // Salva os cards no local storage
}

// CARD - atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper'); // Seleciona todos os cards
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
        // Remove o card selecionado
        cards[indexToDelete].remove();

        // Decrementa o contador de cards para manter a contagem correta
        cardCount--;

        // Atualiza os índices visíveis dos cards
        updateCardIndices();

        // Salva as alterações no local storage
        savePhotosToLocalStorage();

        // Fecha o modal de exclusão
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

fetch('../../../html/pages/divulgacao_galeriaFotos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_galeriaFotos-s1-importacao').innerHTML = data;

        // Adiciona o evento de salvar alterações no card
        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1;
            const cards = document.querySelectorAll('.card-wrapper');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Atualiza a imagem, título e descrição do card
                const imageUrl = document.getElementById('editImage').value;
                if (imageUrl) {
                    selectedCard.querySelector('.card-image').src = imageUrl;
                }
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitle').value;
                selectedCard.querySelector('.card-description').innerText = document.getElementById('editDescription').value;

                // Salva as alterações no local storage
                savePhotosToLocalStorage();

                // Fecha o modal
                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

        // Carrega os cards do local storage quando a página carregar
        loadPhotosFromLocalStorage();
    })
    .catch(error => console.error('Erro ao carregar a página:', error));