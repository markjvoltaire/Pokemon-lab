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