// IMPORT MODULES under test here:
// import { example } from '../example.js';

//import pokemon from '../pokemon.js';
import { encounterPokemon, getPokedex } from '../utils.js';

const test = QUnit.test;

test('count everytime a pokemon is shown', (expect) => {
    localStorage.removeItem('POKEDEX');
    
    //Arrange

    const testCount = [
        { 'id': 1, encountered: 1, captured: 0 },
        { 'id': 2, encountered: 1, captured: 0 }
    ];

    localStorage.setItem('POKEDEX', JSON.stringify(testCount));
        

    // Set up your arguments and expectations
    
        
    
    //Act 
    // Call the function you're testing and set the result to a const
    encounterPokemon(1);
    const pokedex = getPokedex();

   // console.log(pokedex);

    const expected = [
        { 'id': 1, encountered: 2, captured: 0 },
        { 'id': 2, encountered: 1, captured: 0 }
    
    ];


    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokedex, expected);
});


