function openEditModalEventoPróximos() {
    const editModalEventoPróximos = new bootstrap.Modal(document.getElementById('editModalEventosProximos'));
    editModalEventoPróximos.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s3-importacao').innerHTML = data;

        // Carregar eventos do servidor
        carregarEventos();

        // Restaura a URL da imagem salva ao carregar a página
        const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');
        cards.forEach((card, index) => {
            const savedImageUrl = localStorage.getItem(`imagemEvento_${index}`);
            if (savedImageUrl) {
                card.querySelector('.my-index-s3-imagem').src = savedImageUrl;
            }
        });

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtnEventosProximos').addEventListener('click', async function () {
            const index = parseInt(document.getElementById('editIndexEventosProximos').value) - 1;
            const cards = document.querySelectorAll('.my-index-s3-cardAlteracao');
            const imageUrl = document.getElementById('editImageUrlEventosProximos').value; // Certifique-se de que o campo de URL da imagem esteja correto

            // Salva a URL da imagem no localStorage
            localStorage.setItem(`imagemEvento_${index}`, imageUrl);

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                const eventoData = {
                    titulo: document.getElementById('editTitleEventosProximos').value,
                    data: new Date(document.getElementById('editDateEventosProximos').value), // Certifique-se de que está no formato correto
                    horario: document.getElementById('editTimeEventosProximos').value,
                    local: document.getElementById('editLocationEventosProximos').value,
                    preco: parseFloat(document.getElementById('editPriceEventosProximos').value.replace('R$', '').trim()), // Remove R$ e espaços
                    descricao: document.getElementById('editDescriptionEventosProximos').value,
                    url: document.getElementById('editUrlEventosProximos').value
                };

                console.log('Dados do evento a serem enviados:', eventoData);

                try {
                    // Envia os dados do evento para o servidor
                    const response = await fetch('http://localhost:3000/api/eventos', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(eventoData)
                    });

                    if (response.ok) {
                        const resultado = await response.json();
                        console.log('Evento salvo com sucesso:', resultado);

                        // Atualiza o botão de redirecionamento
                        selectedCard.querySelector('.my-index-s3-btnVerEventosProximos').onclick = function () {
                            window.open(eventoData.url, '_blank');
                        };

                        // Fecha o modal
                        const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalEventosProximos'));
                        if (editModalInstance) {
                            editModalInstance.hide();
                        }
                    } else {
                        const errorText = await response.text(); // Captura o texto de erro do servidor
                        console.error('Erro ao salvar o evento:', response.status, errorText); // Loga o status e o texto do erro
                        alert('Erro ao salvar o evento: ' + response.statusText);
                    }
                } catch (error) {
                    console.error('Erro ao enviar dados:', error);
                    alert('Erro ao enviar dados. Tente novamente.');
                }
            } else {
                alert('Índice inválido. Por favor, escolha um índice de card válido.');
            }
        });

        
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

// Função para carregar eventos do banco de dados
async function carregarEventos() {
    try {
        const response = await fetch('http://localhost:3000/api/eventos');
        if (response.ok) {
            const eventos = await response.json();
            exibirEventos(eventos);
        } else {
            console.error('Erro ao carregar eventos:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
    }

}

// Função para exibir eventos na interface
function exibirEventos(eventos) {
    // Ordena os eventos pela data, do mais recente ao mais antigo
    eventos.sort((a, b) => new Date(b.data) - new Date(a.data)); // Ordena com base na data (b - a para ordem decrescente)

    const cards = document.querySelectorAll('.my-index-s3-cardAlteracao'); // Seleciona todos os cards
    // Limpa os dados anteriores, se houver algum card já preenchido
    cards.forEach(card => {
        card.querySelector('.card-title').innerText = '';
        card.querySelector('.card-date').innerText = '';
        card.querySelector('.card-time').innerText = '';
        card.querySelector('.card-location').innerText = '';
        card.querySelector('.card-price').innerText = '';
        card.querySelector('.card-text').innerText = '';

    });

    eventos.forEach((evento, index) => {
        if (index < cards.length) { // Garante que não exceda o número de cards disponíveis
            const card = cards[index];

            // Preenche o card com os dados do evento
            card.querySelector('.card-title').innerText = evento.titulo;
            card.querySelector('.card-date').innerText = new Date(evento.data).toLocaleDateString();
            card.querySelector('.card-time').innerText = evento.horario;
            card.querySelector('.card-location').innerText = evento.local;
            card.querySelector('.card-price').innerText = "R$ " + evento.preco.toFixed(2);
            card.querySelector('.card-text').innerText = evento.descricao;

            // Atualiza o botão de redirecionamento
            const button = card.querySelector('.my-index-s3-btnVerEventosProximos');
            button.onclick = function () {
                window.open(evento.url, '_blank');
            };
        }
    });    
}
