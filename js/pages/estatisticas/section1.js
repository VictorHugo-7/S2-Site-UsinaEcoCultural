// Carrega o conteúdo HTML da seção dinamicamente
fetch('../../../html/pages/estatisticas/section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-estatisticas-s1-importacao').innerHTML = data;

        // Inicializa as estatísticas após o carregamento do conteúdo HTML
        iniciarEstatisticas();
    })
    .catch(error => console.error('Erro ao carregar a página:', error));

// Script de estatísticas
let startTime;
let inactivityTime = 0;
let inactivityInterval;

function iniciarEstatisticas() {
    startTime = new Date();
    countVisit();
    countUserVisits();
    displayLastVisit();
    checkReferer();
    getUserAgentInfo();
    getUserLocation();

    startInactivityTimer();
    window.addEventListener('mousemove', resetInactivity);
    window.addEventListener('keydown', resetInactivity);

    // Registra o tempo total no site antes de sair
    window.onbeforeunload = function () {
        const endTime = new Date();
        const timeSpent = Math.round((endTime - startTime) / 1000);

        let totalTimeSpent = localStorage.getItem('totalTimeSpent');
        if (!totalTimeSpent) {
            totalTimeSpent = 0;
        }

        totalTimeSpent = parseInt(totalTimeSpent) + timeSpent;
        localStorage.setItem('totalTimeSpent', totalTimeSpent);

        alert(`Você passou ${timeSpent} segundos nesta visita. Tempo total gasto no site: ${totalTimeSpent} segundos.`);
    };
}

// Funções de estatísticas
function countVisit() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('counter').textContent = visitCount;
}

function countUserVisits() {
    let userVisitCount = localStorage.getItem('userVisitCount');
    if (!userVisitCount) {
        userVisitCount = 0;
    }
    userVisitCount++;
    localStorage.setItem('userVisitCount', userVisitCount);
    document.getElementById('user-counter').textContent = userVisitCount;
}

function displayLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        document.getElementById('last-visit').textContent = `Sua última visita foi em: ${lastVisit}`;
    }
    const now = new Date();
    localStorage.setItem('lastVisit', now.toLocaleString());
}

function checkReferer() {
    const referer = document.referrer;
    if (referer) {
        document.getElementById('referer').textContent = `Você veio do site: ${referer}`;
    } else {
        document.getElementById('referer').textContent = 'Você acessou diretamente ou não há um referenciador.';
    }
}

function getUserAgentInfo() {
    const browserInfo = navigator.userAgent;
    const platform = navigator.platform;
    document.getElementById('browser-info').textContent = `Você está usando: ${browserInfo} no sistema ${platform}`;
}

function resetInactivity() {
    inactivityTime = 0;
}

function startInactivityTimer() {
    inactivityInterval = setInterval(function () {
        inactivityTime++;
        document.getElementById('inactivity-time').textContent = `Tempo de inatividade: ${inactivityTime} segundos`;
    }, 1000);
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location-info').textContent = `Sua localização aproximada: Latitude ${latitude}, Longitude ${longitude}`;
        });
    } else {
        document.getElementById('location-info').textContent = 'Geolocalização não suportada pelo navegador.';
    }
}
