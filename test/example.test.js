// IMPORT MODULES under test here:
// import { example } from '../example.js';

import pokemon from '../pokemon.js';
import { encounterPokemon, getPokedex, findById, capturedPokemon } from '../utils.js';

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

test('finds pokemon by id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        _id:'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        id: 1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, pokemon);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('encounterPokemon should increase by one', (expect) => {
    localStorage.removeItem('POKEDEX');
    const expected = [
        { 'id': 1, encountered: 1, captured: 0 },
        { 'id': 2, encountered: 1, captured: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(expected));
    
    encounterPokemon(1);
    const pokedex = getPokedex();
    const actual = [
        { 'id': 1, encountered: 2, captured: 0 },
        { 'id': 2, encountered: 1, captured: 0 }
    ];
    expect.deepEqual(pokedex, actual);
});

test('capturedPokemon should increase by one', (expect) => {
    localStorage.removeItem('POKEDEX');

    const expected = [
        { 'id': 1, encountered: 1, captured: 0 },
        { 'id': 2, encountered: 1, captured: 0 }
    ];

    localStorage.setItem('POKEDEX', JSON.stringify(expected));
    capturedPokemon(1);

    const pokedex = getPokedex();
    const actual = [
        { 'id': 1, encountered: 1, captured: 1 },
        { 'id': 2, encountered: 1, captured: 0 }
    ];

    expect.deepEqual(pokedex, actual);
});

