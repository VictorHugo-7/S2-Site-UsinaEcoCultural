document.addEventListener("DOMContentLoaded", function() {
    // Carregar a seção de contato
    fetch('../../../html/pages/contato/section1.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('my-contato-s1-importacao').innerHTML = data;

            // Adicionar o manipulador de envio do formulário após carregar
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Impede o comportamento padrão do formulário
                
                // Mostrar o overlay de carregamento
                const loadingOverlay = document.getElementById('my-contato-s1-loadingOverlay');
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
                        alert('Mensagem enviada com sucesso!');
                        this.reset(); // Limpa o formulário
                    } else {
                        alert('Houve um problema ao enviar sua mensagem.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error);
                    alert('Erro ao enviar a mensagem.');
                })
                .finally(() => {
                    // Sempre ocultar o overlay ao final do processamento
                    loadingOverlay.classList.remove('active');
                });
            });
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
});
