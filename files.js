// todo _________________________________________________THE FILE SYSTEM________________________________________________________

const fs = require('fs');

//reading files 

//? the readFile method is asynchronous
fs.readFile('./docs/blog1.txt', (err, data) =>{

    if(err){
        console.log(err);
    }

    console.log(data.toString());
});

console.log("hello");


//writing files

// ***__________re-writing on an existing file_________***

fs.writeFile('./docs/blog1.txt', 'hello, world' , ()=>{

    console.log('file was written');
})


// **___________creates a new file and writes the given string

fs.writeFile('./docs/blog1.txt', 'hello, world' , ()=>{

    console.log('file was written');
})

// directories



//deleting files