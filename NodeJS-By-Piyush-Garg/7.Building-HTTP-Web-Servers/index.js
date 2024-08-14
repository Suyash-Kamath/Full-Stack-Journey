// HTTP (API) server banana hai 

// const http = require('http')

// const myServer = http.createServer((req,res)=>{

// })
// yeh web server banayga . and it has even request listeners which processes..it has handlers

/**
 * Hamara webserver ko handle kon karega , means kis particular request ko kaise process karein ?
 * We need handler function
 * 
 * 
 * createServer me ResquestListener naam ke callback ko pass kar sakte ho
 * createServer ek requestlisterner leta hai , ek callback leta hai  jo request ko process kar sake
 * so incoming request ko process karne keliye we give arrow function
 * 
 * CreateServer kya karta hai ?
 * So jabhi incoming request aati hai hamare server ke upar toh callback function ko run karega
 */


const http = require('http')
const fs = require('fs');


const myServer = http.createServer((req,res)=>{
    console.log('New Request Received');
    
    const log=`${Date.now()}:${req.url} New Request Received\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
                 res.end("Home Page");
            break;
            case '/contact-us':
                res.end("Contact Us");
            break;
            case '/about':
                res.end("I am Suyash Kamath");
            break;
            default: 
            res.end('404 Not Found')
        }
        // res.end('Hello from Server Again') // you will see two times because browser calls an extra because of favicon
    })
    
    
});
/*
Hey HTTP Module mere liye server banao and callback function hai jisse request ko handdle kar sakte hai

*/

myServer.listen(8000,()=>{
    console.log('Server running on PORT 8000');
    
})

// https://chatgpt.com/c/0f557b7d-c569-4477-857f-9d50f732cad9
// https://chatgpt.com/c/b2836e54-7c78-4685-942b-f26bf9b679bf
