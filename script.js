var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');
var linkSimulador = document.querySelector('classeSimulador');

let linkIndexCurso = document.querySelector('.linkCurso');

function paginaDeCurso() {
    window.location.href = "index-cursos.html";
}

menuBar.addEventListener('click', function () {
    menu.classList.toggle('active');
});