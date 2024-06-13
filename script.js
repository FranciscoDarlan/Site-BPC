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

// function que aparece e desapace menu
function imgTraco() {
    let ulMenu = document.querySelector('.ul-menu-responsivo')
    let icon = document.querySelector('.image-icon-traco') 

    console.log(icon)
    if (ulMenu.classList.contains('remove')){
        ulMenu.classList.remove('remove');
        icon.innerHTML = ' <div class="image-icon-traco"><img class="icon" onclick="imgTraco()" src="./asset-img-cursos/img-fecha-x.png" alt="imagem-menu"></div>'
    }  else{
        ulMenu.classList.add('remove');
        // image.src = "./asset-img-cursos/img-fecha-x.png"
        icon.innerHTML = ' <div class="image-icon-traco"><img class="icon" onclick="imgTraco()" src="./asset-img/menu-removebg-preview.png" alt="imagem-menu"></div>'


    }
    
    
}
