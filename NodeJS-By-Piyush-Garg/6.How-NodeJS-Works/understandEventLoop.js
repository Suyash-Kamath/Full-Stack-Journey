// const fs = require('fs');

// setTimeout(()=>console.log('Hello from Timer1'),0);
// // console.log(fs);

// console.log('Hello from Top level code');

/*

According to the architecture

Top level code is executed first 
const fs = require('fs');

setTimeout(()=>console.log('Hello from Timer1'),0);

console.log('Hello from Top level code');

remember , timer ko start karna ek top level code

see , const fs and console wala run hoga along with the timer on in the background

so top level -> then event callback register jo hai hi nahi koi bhi ->


dekho timer background me chalraha hai and hello from Top evel execute hua hai

Saara process hua toh eventloop hogi start 

yes we have expired timer as it is 0ms and callback is ready to run 

no FS 
no setImmediate
no closedCallback
no task pending

-> exit the program

*/

// abhi setImmediate laga deta hu

const fs = require('fs');

setTimeout(()=>console.log('Hello from Timer 1'),0);

setImmediate(()=>console.log('Hello from Immediate function 1'))
// console.log('Hell from Top Level Code');


// there is catch over here

/**

    agar console.log hata du ,jo immediate wala neeche a raha tha , wo abhi setTimeout ke console wale
    se upar outout de raha hai


    first it was

    Hello from Timer 1
Hello from Immediate function 1

now 

Hello from Immediate function 1
Hello from Timer 1



refer nodeJs , Official Guide

nodejs.org\en\guides\event-loop-timers-and-nexttick

ye bhi yei keh rahe ki 
    Hello from Timer 1
    Hello from Immediate function 1

    aisa chalna chahiye


    lekin inhone bataya hai ki aisa kyu ho raha hai

    if we run the following script which is not within an I/O cycle (i.e. the main module)
    (matlab top level code), the order in which the two timers are executed 
    is non-deterministic, as it is bound by the performance of the process:


    matlab 
    inka sequence 
    setTimeout(()=>console.log('Hello from Timer 1'),0);

setImmediate(()=>console.log('Hello from Immediate function 1'))

depends upon the performance of the process

 */


