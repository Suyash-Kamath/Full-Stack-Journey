
// import React,{useEffect, useRef,useState} from 'react';

// function UseRefHooks(){
    
// const [value,setValue] = useState(0)
// const count= useRef(0)

// // increase count whenever the coomponent gets re-rendered
// useEffect(()=>{
//     count.current = count.current+1;
// })
// /*
// useEffect(()=>{
//     setCount(prev=>prev+1)
// })
//     works for infinity 
//     */
//     return(

//         <>
//         <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
//         <h1>{value}</h1>
//         <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
//         <h1>Render Count : {count.current}</h1>
//         </>
//     )
    
// }

// export default UseRefHooks

// DOM Operation using useRef

import React,{useRef} from 'react';
function UseRefHooks(){

    const inputElement = useRef()
    const btnClicked=()=>{
        console.log(inputElement.current);
        inputElement.current.style.background="cyan"
        
    }
    return (
    <>
    
    <input type="text" ref={inputElement}/>
    <button onClick={btnClicked}>Click Here</button>
    </>)
}

export default UseRefHooks;
