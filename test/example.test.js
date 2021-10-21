// IMPORT MODULES under test here:
// import { example } from '../example.js';

///import pokemon from '../pokemon.js';
import { getPokedex } from '../utils.js';

const test = QUnit.test;

test('get item from local storage and turns into code', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testDex = [
        { 'id': 1, 'pokemon': 'bulbasaur', ecountered: 0, captured: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(testDex));
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const pokedex = getPokedex(); 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokedex, testDex);
});


