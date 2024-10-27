document.addEventListener("DOMContentLoaded", function() {
    // Carregar a seção de rodapé
    fetch('../../components/rodape.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('my-rodape-importacao').innerHTML = data;

            // Adicionar o manipulador de envio do formulário da newsletter após carregar
            document.getElementById('newsletterForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Impede o comportamento padrão do formulário

                // Mostrar o overlay de carregamento
                const loadingOverlay = document.getElementById('my-rodape-loadingOverlay');
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
                        alert('Inscrição realizada com sucesso!'); // Mensagem de sucesso
                        this.reset(); // Limpa o formulário
                    } else {
                        alert('Houve um problema ao se inscrever.'); // Mensagem de erro
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error);
                    alert('Erro ao se inscrever na newsletter.');
                })
                .finally(() => {
                    // Sempre ocultar o overlay ao final do processamento
                    loadingOverlay.classList.remove('active');
                });
            });
        })
        .catch(error => console.error('Erro ao carregar a seção de rodapé:', error));
});
