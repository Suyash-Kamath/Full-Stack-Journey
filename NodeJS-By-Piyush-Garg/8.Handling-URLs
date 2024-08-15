// URL is Uniform Resource Locator

/*
https://www.google.com/

https:// -> ye protocol hota hai  ,protocol is nothing but set of rules jo browser ko batata hai
kis taraha se communicate karna hai ..Server se communicate kaise karna hai .

HTTPS -> request and response encrypted  hongi , SSL certificate use hota hai 
WS ->web sockets , agar realtime communications karni hai 

www.google.com -> this is domain -> User friendly Name of IP address of server

DNS -> maps the url to ip address

see obviously we cannot remember IP address . 

we purchase domain and domain ko uss ip ki taraf point karwaate hai 

/ -> path , HomePage or Root path

piyushgarg.dev/about?userId=1&a=2

Query Parameters are just the extra information jo hum pass karsakte URL ke saath
? mark ke baad jo bhi sentence aata hai naa use hum query parameters , kuch bhi key value pair send kar sakta hu server ko

So basically what it wants to say is 

apne server me dekh sakta hu ek jo request aa rahi hai woh kis path pe and frontend se path me extra information bhejdi ki
jo bhi user  page khol raha hai naa uski userId =1 and a = 2


*/

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
const url = require('url')

const myServer = http.createServer((req,res)=>{
    if(req.url ==='/favicon.ico') return res.end()
   
    
    const log=`${Date.now()}:${req.url} New Request Received\n`

    const myURL = url.parse(req.url,true);
    console.log(myURL);
    
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myURL.pathname){
            case '/':
                 res.end("Home Page");
            break;
            case '/contact-us':
                res.end("Contact Us");
            break;
            case '/about':
                const userName = myURL.query.myname
                res.end(`Hi ${userName}`);
            break;

            case '/search' : 
                const search = myURL.query.search_query
                res.end(`Here are your result for ${search}`)
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



