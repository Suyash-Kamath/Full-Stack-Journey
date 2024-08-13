/*
Single exports or Default export

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}



// wehen you don't export then ye ek taraha ka private function bann jata hai , so export , public banao

// module.exports = 'Suyash' // jo bhi module.exports ki value hogi , woi cheez export hogi 




if you do module.exports  = add;
module.exports = subtract

it overrides the value of exports , so add is overriden

So use JavaScript object to return multiple things
.. you can also rename the function in modules


module.exports= {
    addFn:add , 
    subFn:subtract
};

*/

// Now let's export using exports object
/*
exports.add = (a,b) => a+b;

exports.sub = (a,b) => a-b;

*/

// I like this 

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}


module.exports= {
    addFn:add , 
    subFn:subtract
};
