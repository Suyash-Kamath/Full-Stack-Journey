/*

import React,{useState} from "react";

function UseStateHooks(){


    const [car,setCar] = useState({
        brand :"Ferrari",
        model : "Roma",
        year :"2023",
        color:"red"
    })
    
    const updateColor = ()=>{
        setCar((car)=>{
            return {...car,color:'blue'}
        })
    }

    
    return (

        <>
        <h1>My {car.brand}</h1>
        <h2>It is {car.color} {car.model} from {car.year}</h2>
        <button onClick={updateColor} >Blue</button>
        </>

    )
}

export default UseStateHooks;

*/
import React, { useState } from "react";

function UseStateHooks() {
    const [counter, setCounter] = useState(0);

    function changeCount() {
        // Update the counter by 4 in one go
        setCounter((prevCounter) => prevCounter + 4);
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={changeCount}>Increase by 4</button>
        </>
    );
}

export default UseStateHooks;
