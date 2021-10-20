// import functions and grab DOM elements
import pokemon from './pokemon.js';


// initialize global state
const pokemon1 = document.getElementById('pokemon-pic-1');
const pokemon2 = document.getElementById('pokemon-pic-2');
const pokemon3 = document.getElementById('pokemon-pic-3');
const button = document.getElementById('button');

const generatePokemon = () =>{
    let randomNum1 = Math.floor(Math.random() * pokemon.length);
    let randomNum2 = Math.floor(Math.random() * pokemon.length);
    let randomNum3 = Math.floor(Math.random() * pokemon.length);
};



button.addEventListener('click', ()=>{
    generatePokemon();
});




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
