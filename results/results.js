import pokemons from '../pokemon.js';
import { findById, getPokedex } from '../utils.js';



const goHome = document.getElementById('go-home');


const main = document.getElementById('main');

goHome.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
    window.location.href = '../index.html';

});

const getResults = getPokedex();



for (let item of getResults){

    const caughtPokemon = findById(item.id, pokemons);
    const container = document.createElement('div');

    container.classList.add('results-container');
    const img = document.createElement('img');

    img.src = caughtPokemon.url_image;
    const header = document.createElement('h3');

    header.textContent = caughtPokemon.name;
    const div = document.createElement('div');

    div.classList.add('results-body');
    const p = document.createElement('p');

    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `encounter: ${item.encountered} `;

    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `caught ${item.captured}`;
    p.append(resultsSpan1, resultsSpan2);

    p.classList.add('results-text');
    div.append(img, p);

    container.append(header, div);
    main.appendChild(container);
}



// const pickedNames = getResults.map((item) =>{
//     const pokemons = findById(item.id, pokemon);
//     return pokemons.name;
// });


const names = getResults.map((item)=>{
    const findPoke = findById(item.id, pokemons);
    return findPoke.pokemon;
});

//const picked = getResults.map(item=>item.picked);

const pickedNames = getResults.map(item=>item.captured);



var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Picked',
            data: pickedNames,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

console.log(pickedNames);
