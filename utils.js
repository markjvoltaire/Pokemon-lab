export function findById(id, items){
    // loop through the items
    // if item's id is equal to the id parameter
    //   return the item
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}


export function getPokedex(){

    const dexString = localStorage.getItem('POKEDEX') || '[]';
    const pokedex = JSON.parse(dexString);

    return pokedex;
}

export function encounterPokemon(id){

    const results = getPokedex();
    
    const item = findById(id, results);

    console.log(item);

    if (item) {
        item.encountered++;
    } else {
        const newItem = { id: id, encountered: 1, captured: 0 };
        results.push(newItem);
    }
    const resultsString = JSON.stringify(results);
    localStorage.setItem('POKEDEX', resultsString);

}


