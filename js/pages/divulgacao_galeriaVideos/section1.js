let cardCount = 1;

// CARD - adicionar
function addCard(videoInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <iframe class="my-divulgacao_galeriaVideos-s1-video card-video" width="100%" height="200"
                src="${videoInfo ? videoInfo.videoUrl : 'https://www.youtube.com/embed/dQw4w9WgXcQ'}" 
                title="Video do trabalho" allowfullscreen></iframe>
            <div class="card-body">
                <h5 class="card-title">${videoInfo ? videoInfo.title : 'Título'}</h5>
                <p class="card-text text-muted card-description">${videoInfo ? videoInfo.description : 'Descrição'}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-divulgacao_galeriaVideos-s1-index admin-only">${cardCount}</span>
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
        card.querySelector('.my-divulgacao_galeriaVideos-s1-index').textContent = index + 1;
    });
}

// MODAL - Excluir
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

// Fetch da seção HTML
fetch('../../../html/pages/divulgacao_galeriaVideos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_galeriaVideos-s1-importacao').innerHTML = data;

        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const editIndex = parseInt(document.getElementById('editIndex').value, 10) - 1;
            const videoUrl = document.getElementById('editVideo').value;
            const newTitle = document.getElementById('editTitle').value;
            const newDescription = document.getElementById('editDescription').value;

            // Formatar link do YouTube
            function formatYouTubeUrl(url) {
                const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([\w-]{11})(?:[&?][\w-]+)*$/;
                const match = url.match(youtubeRegex);
                return match ? `https://www.youtube.com/embed/${match[1]}` : url;
            }

            const formattedVideoUrl = formatYouTubeUrl(videoUrl);

            const cards = document.querySelectorAll('.card-wrapper');
            if (editIndex >= 0 && editIndex < cards.length) {
                const card = cards[editIndex];
                card.querySelector('.card-video').src = formattedVideoUrl;
                card.querySelector('.card-title').textContent = newTitle;
                card.querySelector('.card-description').textContent = newDescription;

                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));
