let buttonMostrarTudo = document.querySelector('.show-all'); // button chamar função
let divCardapio = document.querySelector('.div-cardapio-complet'); // div que mostra as informações

let buttonMostraDesconto = document.querySelector('.show-Descount');

// PRECISO CRIAR A FUNCTION DE NAVEGAR ENTRE AS PAGINAS
function MostrarTudoForEach(parametroValores) {
  let myDivCardapio = ''; // começa a variavel sem nada ..

  parametroValores.forEach((produt) => { // function que chama o forEach
    myDivCardapio = myDivCardapio + `
<div class="cardapio-individual">
  <img src=${produt.src} alt="imagem-comida">
  <p>${produt.name}</p>
  <p>R$R$${produt.price}</p>
  <a href="http://wa.me/5521970042950?text=+Olá, estou vindo pelo site e gostaria de saber mais sobre as NR's!" class="buttonComprarLanche">COMPRAR</a>
</div>
`
  })

  divCardapio.innerHTML = myDivCardapio;
}

function mostrarDesconto() {
  const trocaPrice = menuOptions.map((item) => ({
    ...item,
    price: item.price * 0.95
  }))
MostrarTudoForEach(trocaPrice)
}
//função volta para página inicial
// function voltaPaginaPrincipal() {
//   window.location.href = "index.html";
// }


buttonMostrarTudo.addEventListener('click', () => MostrarTudoForEach(menuOptions));
//1° função mostrar na tela com forEach


buttonMostraDesconto.addEventListener('click', mostrarDesconto)
//2° função MAP junto com forEach para mostrar na tela com desconto!!
