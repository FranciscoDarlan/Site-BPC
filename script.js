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


// TROCA DAS IMAGENS CURSOS
let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
}, 1000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

