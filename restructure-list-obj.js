
let list = {}
// needs to look like:
// list = {
//   Janet: [],
//   Timmy: [],
//   etc
// }

const people = [{name: 'Timmy', age: 34, job: 'builder'},
    {name: 'Janet', age: 34, job: 'plumber'},
    {name: 'Timmy', age: 34, job: 'fireman'},
    {name: 'Janet', age: 34, job: 'fitter'},
    {name: 'Timmy', age: 34, job: 'joiner'},
    {name: 'Fred', age: 34, job: 'teacher'},
    {name: 'Nicole', age: 34, job: 'coder'},
    {name: 'Jamie', age: 34, job: 'teaching assistant'}
];


// for each person the values need to be restructured to not be key value pairs but all values just in an arr

people.forEach( person => {
    list[person.name] = person.job
});

console.log( people );

