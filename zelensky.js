dataSet = {
    first: {
        next: {
            array1: [{name: 'Katarina', age: 45}],
            array2: [{name: 'Zelensky W', age: 45}],
            array3: [{name: 'Joachim', age: 45}],
            array4: [{name: 'Zelensky Y', age: 23}],
        },
        last: {
            theseObjects: {
            whereAmI: [
                {firstKey: 'Fruit', secondKey: true},
                {firstKey: 'Vegetable', secondKey: false},
                {firstKey: 'Meat', secondKey: false},
                {firstKey: 'Meat', secondKey: true},
                {firstKey: 'Fruit', secondKey: false},
            ]
            }
        }
    }
}

// get all of the people called Zelensky individual / uniques and put all meat inside the first Zelensky Y and fruit inside the second Zelensky in a new object called belongings

const next = dataSet.first.next
const zelen = {};

Object.keys(dataSet.first.next).forEach( array => {
    console.log(next[array][0].name);
    const name = next[array][0].name;
    
    if (name.includes('Zelensky')){
        zelen[name] = [];
    }
})

dataSet.first.last.theseObjects.whereAmI.forEach( (foodObj) => {
    if(foodObj.firstKey == 'Fruit'){
        zelen[Object.keys(zelen)] = foodObj;
    } else if( foodObj.firstKey == 'Meat' ) {
        // Object.keys(zelen) = foodObj;
    }
})


// {
//   'Zelensky W': { '0': 'Fruit', '4': 'Fruit' },
//   'Zelensky Y': { '2': 'Meat', '3': 'Meat' }
// }