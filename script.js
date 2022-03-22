let i = 0;
for (i = 0; i < 25; i += 1) {
  const linha = document.createElement('div');
  linha.classList = 'pixel';
  document.getElementById('pixel-board').appendChild(linha);
}

function limpaTela() {
  const quadradinho = document.querySelectorAll('.pixel');
  for (let i = 0; i < quadradinho.length; i += 1) {
    quadradinho[i].style.backgroundColor = 'white';
  }
}
const limpar = document.querySelectorAll('#clear-board')[0];
limpar.addEventListener('click', limpaTela);

let corPixel = document.querySelector('#pixel-board');
let preto = document.getElementById('black');
let vermelho = document.getElementById('red');
let azul = document.getElementById('blue');
let verde = document.getElementById('green');

function pegarCor(event) {
  const selecionaCor = document.querySelector('.selected');
  selecionaCor.classList.remove('selected');
  event.target.classList.add('selected');
}

preto.addEventListener('click', pegarCor);
vermelho.addEventListener('click', pegarCor);
azul.addEventListener('click', pegarCor);
verde.addEventListener('click', pegarCor);

function transformaCor(event) {
  const transformacao = event;
  const selecionaCor = document.querySelector('.selected');
  transformacao.target.style.backgroundColor = selecionaCor.id;
}
corPixel.addEventListener('click', transformaCor);
