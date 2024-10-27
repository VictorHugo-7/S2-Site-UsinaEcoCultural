document.addEventListener("DOMContentLoaded", function() {
    // Carregar a seção de contato
    fetch('../../../html/pages/contato/section1.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('my-contato-s1-importacao').innerHTML = data;

            // Adicionar o manipulador de envio do formulário após carregar
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Impede o comportamento padrão do formulário
                const formData = new FormData(this);

                fetch('https://formsubmit.co/cururu995@gmail.com', {
                    method: 'POST',
                    body: formData,
                })
                .then(response => {
                    if (response.ok) {
                        alert('Mensagem enviada com sucesso!'); // Mensagem de sucesso personalizada
                        this.reset(); // Limpa o formulário
                    } else {
                        alert('Houve um problema ao enviar sua mensagem.'); // Mensagem de erro
                    }
                })
                .catch(error => {
                    console.error('Erro ao enviar o formulário:', error);
                    alert('Erro ao enviar a mensagem.');
                });
            });
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
});
