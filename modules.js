const xyz = require('./people');

console.log(xyz.people , xyz.ages);


// ** A similar way to get the same output as above
const {people, ages} = require('./people');

console.log(people , ages );  

