// todo _________________________________________________THE FILE SYSTEM________________________________________________________

const fs = require('fs');

// //reading files 

// //? the readFile method is asynchronous
// fs.readFile('./docs/blog1.txt', (err, data) =>{

//     if(err){
//         console.log(err);
//     }

//     console.log(data.toString());
// });

// console.log("hello");


//writing files

// ***__________re-writing on an existing file_________***

// fs.writeFile('./docs/blog1.txt', 'hello, world' , ()=>{

//     console.log('file was written');
// });


// **___________creates a new file and writes the given string

// fs.writeFile('./docs/blog2.txt', 'hello, world' , ()=>{

//     console.log('file2 was written');
// });

// directories

// ? Creates directory if it doesnt exist
// if(!fs.existsSync('./assets'))
// {fs.mkdir('./assets', (error)=>{

//     if(error){
//         console.log(error);
//     }

//     console.log('folder created');
//  })
// }


//? deletes directory if it deos exist
// else{
//     fs.rmdir('./assets', (error)=>{

//         if(error){
//             console.log(error);
//         }

//         console.log('folder deleted');
//     })
// }


//deleting files

//? ___________delete a file

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{

        if(err){
            console.log(err);
        }else{
            console.log('file deleted');
        }
    })
}