function openEditModalnoticiaPróximos() {
    const editModalnoticiaPróximos = new bootstrap.Modal(document.getElementById('editModalNoticiasAtuais'));
    editModalnoticiaPróximos.show();
}

// Certifique-se de que a seção HTML foi carregada antes de adicionar o listener
fetch('../../../html/pages/index/section4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-index-s4-importacao').innerHTML = data;

        // Carregar noticias do servidor
        carregarnoticias();

        // Restaura a URL da imagem salva ao carregar a página
        const cards = document.querySelectorAll('.my-index-s4-cardAlteracao');
        cards.forEach((card, index) => {
            const savedImageUrl = localStorage.getItem(`imagemNoticia_${index}`);
            if (savedImageUrl) {
                card.querySelector('.my-index-s4-imagem').src = savedImageUrl;
            }
        });

        // Adiciona o event listener para o botão de salvar
        document.getElementById('saveChangesBtnNoticiasAtuais').addEventListener('click', async function () {
            const index = parseInt(document.getElementById('editIndexNoticiasAtuais').value) - 1;
            const cards = document.querySelectorAll('.my-index-s4-cardAlteracao');
            const imageUrl = document.getElementById('editImageUrlNoticiasAtuais').value; // Certifique-se de que o campo de URL da imagem esteja correto

            // Salva a URL da imagem no localStorage
            localStorage.setItem(`imagemNoticia_${index}`, imageUrl);

            if (index >= 0 && index < cards.length) {
                const selectedCard = cards[index];

                const noticiaData = {
                    titulo: document.getElementById('editTitleNoticiasAtuais').value,
                    data: new Date(document.getElementById('editDateNoticiasAtuais').value), // Certifique-se de que está no formato correto
                    horario: document.getElementById('editTimeNoticiasAtuais').value,
                    descricao: document.getElementById('editDescriptionNoticiasAtuais').value,
                    url: document.getElementById('editUrlNoticiasAtuais').value
                };

                console.log('Dados da notícia a serem enviados:', noticiaData);

                try {
                    // Envia os dados da notícia para o servidor
                    const response = await fetch('http://localhost:3000/api/noticias', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(noticiaData)
                    });

                    if (response.ok) {
                        const resultado = await response.json();
                        console.log('Notícia salva com sucesso:', resultado);

                        // Atualiza o botão de redirecionamento
                        selectedCard.querySelector('.my-index-s4-btnVerNoticiasAtuais').onclick = function () {
                            window.open(noticiaData.url, '_blank');
                        };

                        // Fecha o modal
                        const editModalInstance = bootstrap.Modal.getInstance(document.getElementById('editModalNoticiasAtuais'));
                        if (editModalInstance) {
                            editModalInstance.hide();
                        }
                    } else {
                        const errorText = await response.text(); // Captura o texto de erro do servidor
                        console.error('Erro ao salvar a notícia:', response.status, errorText); // Loga o status e o texto do erro
                        alert('Erro ao salvar a notícia: ' + response.statusText);
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

// Função para carregar noticias do banco de dados
async function carregarnoticias() {
    try {
        const response = await fetch('http://localhost:3000/api/noticias');
        if (response.ok) {
            const noticias = await response.json();
            exibirnoticias(noticias);
        } else {
            console.error('Erro ao carregar noticias:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao buscar noticias:', error);
    }
}

// Função para exibir noticias na interface
function exibirnoticias(noticias) {
    // Ordena as notícias pela data, do mais recente ao mais antigo
    noticias.sort((a, b) => new Date(b.data) - new Date(a.data)); // Ordena com base na data (b - a para ordem decrescente)

    const cards = document.querySelectorAll('.my-index-s4-cardAlteracao'); // Seleciona todos os cards

    // Limpa os dados anteriores, se houver algum card já preenchido
    cards.forEach(card => {
        card.querySelector('.card-title').innerText = '';
        card.querySelector('.card-date').innerText = '';
        card.querySelector('.card-time').innerText = '';
        card.querySelector('.card-text').innerText = '';
    });

    noticias.forEach((noticia, index) => {
        if (index < cards.length) { // Garante que não exceda o número de cards disponíveis
            const card = cards[index];

            // Preenche o card com os dados da notícia
            card.querySelector('.card-title').innerText = noticia.titulo;
            card.querySelector('.card-date').innerText = new Date(noticia.data).toLocaleDateString();
            card.querySelector('.card-time').innerText = noticia.horario;
            card.querySelector('.card-text').innerText = noticia.descricao;

            // Atualiza o botão de redirecionamento
            const button = card.querySelector('.my-index-s4-btnVerNoticiasAtuais');
            button.onclick = function () {
                window.open(noticia.url, '_blank');
            };
        }
    });
}
