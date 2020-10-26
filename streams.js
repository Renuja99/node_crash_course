const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf8'});

// readStream.on('data', (chunk)=> {

//     console.log('--------NEW CHUNK--------');
//     console.log(chunk);

// });

//? .on is an event listener on readStream that listens to a 'data' event . Everytime we receive a Buffer of data from the Sream(that is readily available for use) , we fire the callback function and we get access to that chunk of data inside the function,


//? the fs module createReadStream is passed two arguments. the first argument is going to say where we pass data from to the stream and where we want to read data from . The second argument converts the chunk of data into a readable format.


const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk)=>{

//     writeStream.write('\n----NEW CHUNK---\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);
