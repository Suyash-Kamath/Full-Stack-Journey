const fs = require('fs');

const crypto = require('crypto');

const start = Date.now()
process.env.UV_THREADPOOL_SIZE=10
setTimeout(()=>console.log('Hello From Timer 1'));

setImmediate(()=>console.log('Hello from Immediate Fn 1'))

fs.readFile('sample.txt','utf-8',()=>{
    console.log('IO POLLING FINISH');
    setTimeout(()=>console.log('Hello from Timer2'),0);
    setTimeout(()=>console.log('Hello from Timer3'),5*1000);
    setImmediate(()=>console.log('Hi from Immediate Function 2 '))
    // CPU intensive task perform honge Thread pool ke andhar
    crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password1 Done');
        
    })
    crypto.pbkdf2('password2','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password2 Done');
        
    })
    crypto.pbkdf2('password3','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password3 Done');
        
    })
    crypto.pbkdf2('password4','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password4 Done');
        
    })

    
    // 4 CPU Intensive work Eventloop me nahi bali thread pool ke andhar kaam karenge , threads use karnege
    /**
     By default 4 threads hotey hai , means 4 task parallely run honge thread pool ke threads ko use karke
     Let's note the time
     */
    crypto.pbkdf2('password5','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password5 Done');
        
    })

    // abhi hum 5 password ko hash kar rahe hai but by default threads 4 hai , 5th task ko wait karna padega 
    //  ki jab ek task khatam toh ek thread lekar kaam shuru
    crypto.pbkdf2('password6','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password6 Done');
        
    })

    // we can control the threads by using 
    // process.env.UV_THREADPOOL_SIZE=10
})

console.log('Hello from Top level code');
