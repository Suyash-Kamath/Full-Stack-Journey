import React,{useCallback,useState} from "react";
import Header from "../components/header";

function UseCallbackHooks(){

    const [count,setCount] = useState(0);
    // const newFn=()=>{}
        const newFn = useCallback(()=>{

        },[]) // whenever it will create first function first time , it will cache it , whenever re render it will use that cached function,
        // so when the function is same then Header prop is same 
    return (

        <>
        <Header newFn={newFn}/> 
        {/* // Might give referential equality problem..it is like giving new props on re-rendering */}
        {/* // use useCallback hook to solve  */}
        <h1>{count}</h1>
        <button onClick={()=>{return setCount(prev=>prev+1)}}>Click Here</button>
        </>
    )
}

export default UseCallbackHooks;