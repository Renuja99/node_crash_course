 const http = require('http');

 const server = http.createServer((req, res)=>{
     
    console.log('A request is made..');

    //
 });
//? createServer takes a callback function as an argument and runs everytime a request comes in to our server. Inside this function we get access to the request object and the response object.


 //? ------------denotes that the local server is listening on port 3000 and a request is sent to this 

 server.listen(3000, 'localhost', ()=>{

   console.log('Listening for requests on port 3000 ');
 });

 