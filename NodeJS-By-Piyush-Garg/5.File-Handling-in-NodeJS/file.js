const fs = require('fs');

// Synchronous call (path,content)
// fs.writeFileSync('./test.txt','Namaste'); // see difference between writeFile and writeFileSync 
// this can override if I write something again using this method

// Asynchronous
/*
fs.writeFile('./test.txt',"Namaste Asynchronous",(err)=>{
    // console.log(err);
    
})

*/

// const result =fs.readFileSync('./contacts.txt','utf-8') synchronous use kiya toh result variable me daalega
// if you use asynchronous then result return nahi karega
// console.log(result);

/*
fs.readFile('./contacts.txt','utf-8',(err,result)=>{
  if(err){
    console.log(err);
    
  }else{
    console.log(result);
    
  }
})
  */

// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString())

fs.appendFileSync('./test.txt',`${Date.now()} Hey There\n`) // this is used to make server logs for monitoring purpose

fs.cpSync('./test.txt','./copyTest.txt') // copy files

// delete
fs.unlinkSync('./copyTest.txt')

console.log(fs.statSync('./test.txt').isDirectory())

fs.mkdirSync('my-document/Suyashh/Bhaskar/Kamath',{recursive:true}) 

fs.mkdirSync('my-docs/a/b/c/d/e/f',{recursive:true})

fs.mkdirSync('my-docs/suyash',{recursive:true})
