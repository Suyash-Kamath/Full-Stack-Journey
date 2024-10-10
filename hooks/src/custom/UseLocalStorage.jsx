import React ,{useState,useEffect}from "react";

function UseLocalStorage(key,initialValue){

    const [name,setName] = useState(
        localStorage.getItem(key)?
        localStorage.getItem(key) : initialValue
    );
    useEffect(()=>{
        localStorage.setItem(key,name)
    },[name,key])

    return[
        name,setName

        
    ]
}
export default UseLocalStorage