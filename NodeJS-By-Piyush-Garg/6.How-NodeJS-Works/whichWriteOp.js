// Which to choose : writeFile or writeFileSync


const fs  =require('fs');
const os = require('os')

/**
// Sync

fs.writeFileSync('./test.txt',"Hello World")

//Async
 
fs.writeFile('./test.txt','Hello World',(err)=>{

})
 */

console.log(os.cpus().length);


console.log('1');

// const result=fs.readFileSync('test.txt','utf-8')


fs.readFile('test.txt','utf-8',(err,result)=>{
    console.log(result);
    
});

console.log('2');
console.log('3');
console.log('4');


