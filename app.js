// import functions and grab DOM elements
import pokemon from './pokemon.js';
import { capturedPokemon, encounterPokemon } from './utils.js';


// initialize global state
const pokemon1 = document.getElementById('pokemon-pic-1');
const pokemon2 = document.getElementById('pokemon-pic-2');
const pokemon3 = document.getElementById('pokemon-pic-3');
const poke1 = document.getElementById('poke1');
const poke2 = document.getElementById('poke2');
const poke3 = document.getElementById('poke3');
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
    encounterPokemon(pokemonOne.id);
    pokemon1.src = pokemonOne.url_image;
    poke1.value = pokemonOne.id;


    let pokemonTwo = pokemon[randomNum2];
    encounterPokemon(pokemonTwo.id);
    pokemon2.src = pokemonTwo.url_image;
    poke2.value = pokemonTwo.id;
    
    let pokemonThree = pokemon[randomNum3];
    encounterPokemon(pokemonThree.id);
    pokemon3.src = pokemonThree.url_image;
    poke3.value = pokemonThree.id;

};

let totalPlays = 0;
encounterPokemon();

button.addEventListener('click', ()=>{
    const pickedPokemon = document.querySelector('input[type=radio]:checked');

    if (pickedPokemon) {
        const pickedId = Number(pickedPokemon.value);
        capturedPokemon(pickedId);

        totalPlays++;

        if (totalPlays >= 10) {
            window.location.href = './results.html';
        } else {
            
            generatePokemon();
        }
    }


});

generatePokemon();