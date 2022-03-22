let i = 0;
for (i = 0; i < 25; i += 1) {
  const linha = document.createElement('div');
  linha.classList = 'pixel';
  document.getElementById('pixel-board').appendChild(linha);
}


function limpaTela() {
  let quadradinho = document.querySelectorAll('.pixel');
  for (let i = 0; i < quadradinho.length; i += 1) {
    quadradinho[i].style.backgroundColor = 'white';
  }
}
let limpar = document.querySelectorAll('#clear-board')[0];
limpar.addEventListener('click', limpaTela);

const corPixel = document.getElementById('pixel-board');
const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

function pegarCor(event) {
  const selecionaCor = document.querySelectorAll('.selected');
  selecionaCor.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', pegarCor);
red.addEventListener('click', pegarCor);
blue.addEventListener('click', pegarCor);
green.addEventListener('click', pegarCor);

function transformaCor(event) {
  const transformacao = event;
  const selecionaCor = document.getElementsByClassName('selected');
  transformacao.target.style.backgroundColor = selecionaCor.id;
}
corPixel.addEventListener('click', transformaCor);
