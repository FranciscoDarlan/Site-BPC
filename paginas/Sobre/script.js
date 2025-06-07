
// troca de ano
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").innerText = new Date().getFullYear();
});

AOS.init({
    duration: 800,
    offset: 100,
});
