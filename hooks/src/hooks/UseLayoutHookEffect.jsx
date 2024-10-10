import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffectHook(){

    useEffect(()=>{
        console.log('Message from useEffect');
        
    },[])

    useLayoutEffect(()=>{
        console.log('Message from useLayoutEffect');
        
    },[])
    return (

        <>
        <h2>Test Message </h2>
        {Array(2000).fill('').map((item,index)=>(<li key={index}>{Math.pow(Math.random(),10)}</li>))}
        <p>useLayoutEffect gets executed before the above test message and also useEffect Hook</p>
        <p>First is calling useLayoutEffect then print the DOM element, i.e h2 and after that execute the useEffect and useLayoutEffect will be called before mounting the UI element</p>
        </>
    )
}

export default UseLayoutEffectHook