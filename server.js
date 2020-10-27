 const http = require('http');
 const fs  = require('fs');

 const server = http.createServer((req, res)=>{
     
    console.log(req.url , req.method);

    // set header content type
    //? The response headers give more information to the browser about what kind of response is coming back to it.

   //  res.setHeader('Content-type', 'text/html' );
   //  res.write('<p>Hello Ninjas</p>');
   //  res.write('<p>Hello again Ninjas</p>');
   //  res.end();

    //? First we have got to specify the type of content we are going to send as a response.
    //? Secondly we write what we are going to return 
    //? Finally we end the response.

    //sending an html file

    fs.readFile('./views/index.html', (err, data)=>{
       if(err){
          console.log(err);
          res.end();
       }else{
          res.write(data);
          res.end();
       }

    })
 });

 //? createServer takes a callback function as an argument and runs everytime a request comes in to our server. Inside this function we get access to the request object and the response object.


 //? ------------denotes that the local server is listening on port 3000 and a request is sent to this 

 server.listen(3000, 'localhost', ()=>{

   console.log('Listening for requests on port 3000....');
 });

 