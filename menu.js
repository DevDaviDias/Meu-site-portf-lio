const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

// Função para rolar suavemente até a seção correspondente quando um link do menu é clicado
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const sectionId = this.getAttribute('href'); // Obtém o ID da seção correspondente ao link

        // Rola suavemente até a seção correspondente
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

type="text/javascript">
function translateToEnglish() {
  var selectElement = document.querySelector(".goog-te-combo");
  selectElement.value = "en"; // Define o valor do menu suspenso para inglês
  selectElement.dispatchEvent(new Event('change')); // Dispara o evento de mudança para acionar a tradução
}

const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu') 

menuDiv.addEventListener('click',animarmenu)

function animarmenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')}