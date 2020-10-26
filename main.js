'use strict';

//Generar numero aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(random);

//Definir evento 1

const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');
const track = document.querySelector('.js-paragraph');

function number() {
  const inputValue = parseInt(input.value);
  console.log(inputValue);
  if (inputValue > 100 || inputValue < 1) {
    track.innerHTML = 'Pista: El numero debe estar entre 1 y 100';
  } else if (inputValue > random) {
    track.innerHTML = 'Pista: Demasiado alto';
  } else if (inputValue < random) {
    track.innerHTML = 'Pista: Demasiado bajo';
  } else if (inputValue === random) {
    track.innerHTML = 'Pista: Has ganado campeona';
  }
}

// Definimos evento 2

const atempsNumber = document.querySelector('.js-paragraph1');

let acc= 0;
function attemps() {
  if (track.value === 'Pista: Has ganado campeona') {
    acc += 0;
    atempsNumber.innerHTML = 'Número de intentos: ' + acc;
  } else {
    acc += 1;
    atempsNumber.innerHTML = 'Número de intentos: ' + acc;
  }
}

function play (){
  number ();
  attemps ();
}

button.addEventListener('click', play);
