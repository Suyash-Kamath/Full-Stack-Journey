import React,{useEffect, useState} from 'react';

function UseEffectHooks(){
        const [count,setCount] = useState(0)
        const [name,setName] =useState('Suyash')
        useEffect(()=>{
            setTimeout(() => {
                setCount(count=>count+1)
            }, 2000);
        },[count,name])
        // without [] , continuous execute , if add [] execute only once the component
        // [count] once it executes whenever the component is loaded , if count changes , again execute 
    return (

        <>
        <h1>I have rendered {count} times!!</h1>
        </>
    )
}

export default UseEffectHooks