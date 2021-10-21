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

    while (
        randomNum1 === randomNum2 ||
      randomNum1 === randomNum3 ||
      randomNum2 === randomNum3 
    
    ){
        randomNum1 = Math.floor(Math.random() * pokemon.length);
        randomNum2 = Math.floor(Math.random() * pokemon.length);
        randomNum3 = Math.floor(Math.random() * pokemon.length);
        

    }
    
  
  
  
    let pokemonOne = pokemon[randomNum1];
    pokemon1.src = pokemonOne.url_image;


    let pokemonTwo = pokemon[randomNum2];
    pokemon2.src = pokemonTwo.url_image;


    let pokemonThree = pokemon[randomNum3];
    pokemon3.src = pokemonThree.url_image;
  
};

button.addEventListener('click', ()=>{

    generatePokemon();

});

console.log(generatePokemon);