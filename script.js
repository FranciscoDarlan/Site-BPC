// console.log('estou funcionando')

//TROCA DAS IMAGENS CURSOS
let count = 1;
document.getElementById("radio1").checked = true; // inicia a 1° imagem já com input radio marcado!!

setInterval(function () {  // faz a função durante o tempo colocado no final
    nextImage();
}, 3000);

function nextImage() { // função proxima imagem
    count++; // acrescendta mais1
    if (count > 4) { // condição
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

