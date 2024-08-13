// IO Polling : FS
/*
const fs = require('fs');

setTimeout(()=>console.log('Hello From Timer 1'));

setImmediate(()=>console.log('Hello from Immediate Fn 1'))

fs.readFile('sample.txt','utf-8',()=>{
    console.log('IO POLLING FINISH');
    
})

console.log('Hello from Top level code');

*/
/*

Jaise hi node understandingPolling.js kiya then

Top level code execute hogi 

Top level code kya hai 

const fs
setTimeout
setImmediate
readFile
console.log


output me console.log("Top level")
iske baad event loop hogi start -> check karega ki koi expired timer hai ? so Hello from Timer 1 aayega
iske baad ayga IO polling lekin file system ko padne me time lag sakta hai  , so sure nahi ki yeh finish hua 
ki nahi because ho sakta hai ki yeh file bohot hi jyada expensive ho , 1 GB , read karne me depend karta
file ki size ke upar

let's say time lag raha hai , toh wo utne me  aage chala jayega 

setImmediate callback run karenge , so we get Hello from Immediate fn 1

then ye jayega closed callback , jo koi bhi nahi hai

fir dekega kya koi task pending hai ?

yes , then firse start kareg

expired timer callback
io polling > lets say file read ho gayi and uske callback fn ko execute karega
setImmediate CallBack

*/

// Abi callback ke andhar setTimeout lagaunga


const fs = require('fs');

setTimeout(()=>console.log('Hello From Timer 1'));

setImmediate(()=>console.log('Hello from Immediate Fn 1'))

fs.readFile('sample.txt','utf-8',()=>{
    console.log('IO POLLING FINISH');
    setTimeout(()=>console.log('Hello from Timer2'),0);
    setTimeout(()=>console.log('Hello from Timer3'),5*1000);
    setImmediate(()=>console.log('Hi from Immediate Function 2 '))
    //jaise IO polling finish , ye 2 timer ko start kiya but next priority thi setImmediate ki
    // IO Polling ke baad setImmediate hai , hai naa , toh execute kar jayegi
    // task is pending last , expired timer hai , yes , timer2 execute , aage jayega
    //  kuch nahi kuch nahi , fir repeat karega eventloop process and lastly timer 3 execute

    // last me eventloop kar jayegi exit 


    


})

console.log('Hello from Top level code');

/*

output is 
Hello from Top level code
Hello From Timer 1       
Hello from Immediate Fn 1
IO POLLING FINISH        
Hello from Timer2        
Hello from Timer3

Yes, in Node.js, the require statements are executed as part of the top-level code ~Chatgpt

 */
