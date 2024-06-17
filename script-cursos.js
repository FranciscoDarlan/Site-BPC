let divCardapio = document.querySelector('.div-cardapio-complet'); // div que mostra as informações
let buttonMostrarTudo = document.querySelector('.show-all'); // button chamar função
let buttonMostraDesconto = document.querySelector('.show-Descount');
let SomaTotal = document.querySelector('.soma-all');
let filtrarCurso = document.querySelector('.filtra-curso');
let filtrarNr = document.querySelector('.filtra-NR');

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

function mostrarASoma() {
  let valorTotal = menuOptions.reduce((acc, crr) => acc + crr.price, 0)
   
  divCardapio.innerHTML = `
  <div class="cardapio-individual">
  <p> A Soma Dos Cursos é R$ ${valorTotal}</p>
  </div>
  `
}

function functionFiltrarCurso() {
  const filtraCourse = menuOptions.filter((item)=> item.course)

  MostrarTudoForEach(filtraCourse)
}

function FunctionFiltrarNr() {
  const filtraNr = menuOptions.filter((item)=> item.course != true)

  MostrarTudoForEach(filtraNr)
}


buttonMostrarTudo.addEventListener('click', () => MostrarTudoForEach(menuOptions));
//1° função mostrar na tela com forEach

buttonMostraDesconto.addEventListener('click', mostrarDesconto)
//2° função MAP junto com forEach para mostrar na tela com desconto!!

SomaTotal.addEventListener('click', mostrarASoma)

filtrarCurso.addEventListener('click', functionFiltrarCurso)
filtrarNr.addEventListener('click', FunctionFiltrarNr)