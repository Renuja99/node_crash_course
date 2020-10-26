const people = ['yoshi','ryu','chun-li', 'mario'];
const ages   =[20, 25, 30, 35];
const location = ['maharagma', 'piliyandala','kottawa', 'homagama'];


console.log(people);


module.exports ={

    people , ages , location
}

const os = require('os');

console.log(os.platform(), os.homedir());