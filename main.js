'use strict';

//Generar numero aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

const random = getRandomNumber(100);
console.log(random);

//Definir evento 1

const button = document.querySelector (".js-button" );
const input = document.querySelector ('.js-input');
const pista = document.querySelector ('.js-paragraph')

function number (){
    const inputValue = parseInt(input.value);
    if (inputValue > 100 || inputValue < 1) { pista.innerHTML = "El numero debe estar entre 1 y 100"}
    else if (inputValue > random) {
       pista.innerHTML = "Demasiado alto"
    } else if (inputValue < random) {
        pista.innerHTML = "Demasiado bajo"
    } else if (inputValue === random){
        pista.innerHTML = "Has ganado campeona"
    }
}

button.addEventListener ('click', number)