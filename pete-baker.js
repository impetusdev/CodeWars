function cakes(recipe, available) {
    // returns an integer for the max number you can bake. 
    // loop over each recipe item, remove it's amount from the availible ingredients. 
    let numCakes = -1;
    let moreCakes = true;
    
    while (moreCakes){
        // Check if all ingredients present
        numCakes ++;
        // how would I use reduce?
        // I think the optimal method is to check if you have all the included ingredients in your availible and only show those, then divide each by their respective values in the recipe, then floor and get the minimum value. 
        Object.keys(recipe).forEach( key => {

            if (available[key]){
                available[key] -= recipe[key];
                
                if (available[key] < 0){
                    moreCakes = false;
                }
            } else {
                moreCakes = false;
            }
        });
    }

    return numCakes;
}

function cakesReduce(recipe, available) {
    return Object.keys(recipe)
        .reduce(( prev, curr, ) => {
            const multiple = available[curr] / recipe[curr];
            let num = Math.min( multiple ? multiple : 0, prev );    
            return num
        }, Infinity);
}

console.log( cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 
console.log( cakesReduce({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 
