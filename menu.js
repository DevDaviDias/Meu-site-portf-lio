
Claro, aqui está o JavaScript completo com as modificações para abrir o menu apenas em dispositivos móveis:

javascript
Copy code
// Função para verificar se o dispositivo é um dispositivo móvel
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Selecionando os elementos do DOM
let btnMenu = document.getElementById('btn_menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFecharMenu = document.getElementById('btn_fechar_menu');

// Abrir o menu móvel ao clicar no botão do menu
btnMenu.addEventListener('click', () => {
    if (isMobileDevice()) {
        menuMobile.classList.add('abrir-menu');
        overlay.style.display = "block";
    }
});

// Fechar o menu móvel ao clicar no botão de fechar
btnFecharMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.display = "none";
});

// Fechar o menu móvel ao clicar no overlay
overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.display = "none";
});