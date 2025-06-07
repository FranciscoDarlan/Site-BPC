document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").innerText = new Date().getFullYear();
});

const enderecos = [
    { texto: "CURICICA", style: "opacity 0.5s ease",  link: "https://www.google.com/maps/place/Polo+Curicica/@-22.942932,-43.383122,15z/data=!4m6!3m5!1s0x9bd9299d78a69b:0xae2335df3c16f090!8m2!3d-22.9429316!4d-43.383122!16s%2Fg%2F11pzg4r7f_?entry=ttu" },
    { texto: "BANGU", style: "opacity 0.5s ease", link: "https://www.google.com/maps/place/Polo+Curicica+Bangu/@-22.8802895,-43.4648697,20z/data=!4m6!3m5!1s0x9bdf37aec154d9:0x236d29d3265a48d7!8m2!3d-22.880334!4d-43.4645246!16s%2Fg%2F11w1jvp075?entry=ttu" },
];

let i = 0;

function trocarEndereco() {
    const localTexto = document.getElementById("texto-localizacao");
    const localLink = document.getElementById("link-localizacao");

    localTexto.style.opacity = 0;

    setTimeout(() => {
        localTexto.textContent = enderecos[i].texto;
        localLink.href = enderecos[i].link;
        localTexto.style.transition = enderecos[i].style; 

        localTexto.style.opacity = 1;

        i = (i + 1) % enderecos.length;
    }, 500); 
}

trocarEndereco();
setInterval(trocarEndereco, 2500); 

const sliderTrack = document.getElementById("slider-track");
let index = 0;

sliderTrack.style.transition = "none";
sliderTrack.style.transform = "translateX(0)";

setTimeout(() => {
    setInterval(() => {
        index++;
        sliderTrack.style.transition = "transform 0.8s ease-in-out";
        sliderTrack.style.transform = `translateX(-${index * 100}vw)`;

        if (index === 5) {
            setTimeout(() => {
                sliderTrack.style.transition = "none";
                sliderTrack.style.transform = "translateX(0)";
                index = 0;
            }, 800);
        }
    }, 6000);
}, 200);


