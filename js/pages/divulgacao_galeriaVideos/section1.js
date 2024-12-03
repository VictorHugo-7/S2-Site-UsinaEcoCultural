let cardCount = localStorage.getItem('videoCardCount') ? parseInt(localStorage.getItem('videoCardCount')) : 1;

// Function to save video cards to local storage
function saveVideosToLocalStorage() {
    const cards = document.querySelectorAll('.card-wrapper');
    const videoData = Array.from(cards).map(card => {
        return {
            videoUrl: card.querySelector('.card-video').src,
            title: card.querySelector('.card-title').textContent,
            description: card.querySelector('.card-description').textContent
        };
    });
    localStorage.setItem('videoCards', JSON.stringify(videoData));
    localStorage.setItem('videoCardCount', cardCount);
}

// Function to load video cards from local storage
function loadVideosFromLocalStorage() {
    const savedVideos = localStorage.getItem('videoCards');
    if (savedVideos) {
        const cardContainer = document.getElementById('cards-container');
        cardContainer.innerHTML = ''; // Clear existing cards

        const videoData = JSON.parse(savedVideos);
        videoData.forEach(video => {
            addCard(video);
        });
    }
}

// CARD - adicionar
function addCard(videoInfo = null) {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    // Card HTML com o índice correto atualizado
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
                <span class="my-divulgacao_galeriaVideos-s1-index admin-only">1</span>
            </div>
        </div>
    `;
    cardContainer.appendChild(newCard);
    cardCount++; // Incrementa o contador de cards
    updateCardIndices(); // Atualiza todos os índices após a adição
    saveVideosToLocalStorage(); // Salva os cards no local storage
}

// CARD - atualizar índices
function updateCardIndices() {
    const cards = document.querySelectorAll('.card-wrapper'); // Seleciona todos os cards
    cards.forEach((card, index) => {
        card.querySelector('.my-divulgacao_galeriaVideos-s1-index').textContent = index + 1;
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
        saveVideosToLocalStorage();

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

fetch('../../../html/pages/divulgacao_galeriaVideos/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-divulgacao_galeriaVideos-s1-importacao').innerHTML = data;

        // Adiciona o evento de salvar alterações no card
        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const editIndex = parseInt(document.getElementById('editIndex').value, 10) - 1;
            const videoUrl = document.getElementById('editVideo').value;
            const newTitle = document.getElementById('editTitle').value;
            const newDescription = document.getElementById('editDescription').value;

            // Função para transformar URLs do YouTube no formato embed
            function formatYouTubeUrl(url) {
                const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([\w-]{11})(?:[&?][\w-]+)*$/;
                const match = url.match(youtubeRegex);
                return match ? `https://www.youtube.com/embed/${match[1]}` : url;
            }

            // Verifique se a URL fornecida é do YouTube e formate-a
            const formattedVideoUrl = formatYouTubeUrl(videoUrl);

            const cards = document.querySelectorAll('.card-wrapper');
            if (editIndex >= 0 && editIndex < cards.length) {
                const card = cards[editIndex];
                card.querySelector('.card-video').src = formattedVideoUrl;
                card.querySelector('.card-title').textContent = newTitle;
                card.querySelector('.card-description').textContent = newDescription;

                // Salva as alterações no local storage
                saveVideosToLocalStorage();

                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

        // Carrega os cards do local storage quando a página carregar
        loadVideosFromLocalStorage();
    })
    .catch(error => console.error('Erro ao carregar a página:', error));