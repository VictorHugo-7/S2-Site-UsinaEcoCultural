fetch('../../../html/pages/peticao/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-peticao-s1-importacao').innerHTML = data;

        document.querySelector('.my-peticao-s1-btnAssineAgora').addEventListener('click', function() {
            window.open('https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/', '_blank'); // 
        });

    })
    .catch(error => console.error('Erro ao carregar a página:', error));