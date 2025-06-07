
// troca de ano
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").innerText = new Date().getFullYear();
});

// filtro
const input = document.getElementById('filtro');
const botoes = document.querySelectorAll('.cursos button');

input.addEventListener('input', () => {
    const valor = input.value.toLowerCase();

    botoes.forEach(botao => {
        const texto = botao.textContent.toLowerCase();
        if (texto.includes(valor)) {
            botao.style.display = 'flex';
        } else {
            botao.style.display = 'none';
        }
    });
});
