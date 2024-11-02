let cardCount = 1; // Variável para contar o número total de cards



// CARD - adicionar
function addCard() {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    // Card HTML com o índice correto atualizado
    newCard.innerHTML = `
        <div class="card" style="height: 100%;">
            <iframe class="my-divulgacao_galeriaVideos-s1-video card-video" width="100%" height="200"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video do trabalho" allowfullscreen></iframe>
            <div class="card-body">
                <h5 class="card-title">Título</h5>
                <p class="card-text text-muted card-description">Descrição</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <span class="my-divulgacao_galeriaVideos-s1-index">1</span>
            </div>
        </div>
        `;
    cardContainer.appendChild(newCard);
    cardCount++; // Incrementa o contador de cards
    updateCardIndices(); // Atualiza todos os índices após a adição
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
    const indexToDelete = parseInt(document.getElementById('deleteIndex').value, 10) - 1; // Converte o índice 1-based para 0-based
    const cards = document.querySelectorAll('.card-wrapper');

    if (indexToDelete >= 0 && indexToDelete < cards.length) {
        // Remove o card selecionado
        cards[indexToDelete].remove();

        // Decrementa o contador de cards para manter a contagem correta
        cardCount--;

        // Atualiza os índices visíveis dos cards
        updateCardIndices();

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

                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });
    })
    .catch(error => console.error('Erro ao carregar a página:', error));