let cardCount = 1; // Variável para contar o número total de cards



// MODAL - Pix
function openPixModal() {
    const pixModal = new bootstrap.Modal(document.getElementById('pixModal'));
    pixModal.show();
}



// CARD - adicionar
function addCard() {
    const cardContainer = document.getElementById('cards-container');
    const newCard = document.createElement('div');
    newCard.classList.add('col-12', 'col-md-6', 'col-lg-3', 'mb-4', 'card-wrapper');

    // Card HTML com o índice correto atualizado
    newCard.innerHTML = `
            <div class="card" style="height: 100%;">
                <img src="../../../midias/img/global/imagem.svg"
                    class="my-loja-s1-imagem card-image" alt="Imagem da loja">
                <div class="card-body">
                    <h5 class="card-title">Título</h5>
                    <h6 class="card-subtitle mb-2 text-muted card-price">Preço</h6>
                    <p class="card-text text-muted card-description">Descrição</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <span class="my-loja-s1-index admin-only">1</span>
                    <button class="my-loja-s1-btnComprar" onclick="openPixModal()">Comprar</button>
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
        card.querySelector('.my-loja-s1-index').textContent = index + 1;
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





fetch('../../../html/pages/loja/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-loja-s1-importacao').innerHTML = data;


        // Adicionar o manipulador de envio do formulário para o formulário pixForm
        document.getElementById('pixForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do formulário

            // Mostrar o overlay de carregamento
            const loadingOverlay = document.getElementById('my-loja-s1-loadingOverlay');
            loadingOverlay.classList.add('active');

            const formData = new FormData(this);

            fetch('https://formsubmit.co/cururu995@gmail.com', {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    // Ocultar o overlay de carregamento ao receber a resposta
                    loadingOverlay.classList.remove('active');

                    if (response.ok) {
                        alert('Comprovante enviado com sucesso!');
                        this.reset(); // Limpa o formulário

                        // Fecha o modal após envio bem-sucedido
                        const pixModal = bootstrap.Modal.getInstance(document.getElementById('pixModal'));
                        pixModal.hide();
                    } else {
                        alert('Houve um problema ao enviar seu comprovante.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error);
                    alert('Erro ao enviar o comprovante.');
                })
                .finally(() => {
                    // Sempre ocultar o overlay ao final do processamento
                    loadingOverlay.classList.remove('active');
                });
        });


        document.getElementById('saveChangesBtn').addEventListener('click', function () {
            const index = document.getElementById('editIndex').value - 1; // Índice baseado em 1
            const cards = document.querySelectorAll('.card');

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                // Atualiza a imagem, título, preço e descrição do card
                const imageUrl = document.getElementById('editImage').value;
                if (imageUrl) {
                    selectedCard.querySelector('.card-image').src = imageUrl;
                }
                selectedCard.querySelector('.card-title').innerText = document.getElementById('editTitle').value;
                selectedCard.querySelector('.card-price').innerText = "R$ " + document.getElementById('editPrice').value;
                selectedCard.querySelector('.card-description').innerText = document.getElementById('editDescription').value;

                // Fecha o modal
                const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
                editModal.hide();
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });


        // Controle do botão de envio conforme aceite dos Termos e Política
        const termsCheckboxLoja = document.querySelector('#termsCheckboxLoja');
        const enviarComprovanteButton = document.querySelector('.my-loja-s1-btnEnviarComprovante');

        // Inicializa o botão como desabilitado
        enviarComprovanteButton.disabled = true;

        termsCheckboxLoja.addEventListener('change', function () {
            enviarComprovanteButton.disabled = !this.checked;
            enviarComprovanteButton.classList.toggle('enabled', this.checked);
            enviarComprovanteButton.classList.toggle('disabled', !this.checked);
        });




    })
    .catch(error => console.error('Erro ao carregar a página:', error));