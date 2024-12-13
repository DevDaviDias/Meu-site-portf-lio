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


const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarmenu)

function animarmenu() {
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}

// Função para exibir a mensagem de sucesso
function exibirMensagem() {
    document.getElementById("mensagem-enviada").style.display = "block";
}

//alert("Seu formulário foi enviado com sucesso

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente
    alert("Seu formulário foi enviado com sucesso!"); // Exibe o alerta
    // Você pode adicionar aqui qualquer outra lógica que precise ser executada após o envio do formulário
    document.getElementById("formulario").reset(); // Limpa os campos do formulário após o envio
});
