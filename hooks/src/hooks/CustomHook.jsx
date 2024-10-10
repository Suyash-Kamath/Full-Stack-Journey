import React from "react";
import UseLocalStorage from "../custom/UseLocalStorage";

function CustomHook() {
   // Use the custom hook properly
   const [name, setName] = UseLocalStorage('username', '');
   const [id, setId] = UseLocalStorage('userId', '');

   return (
       <>
           <input 
               type="text" 
               placeholder="Enter your name" 
               value={name} 
               onChange={(e) => setName(e.target.value)} 
           />
           <h2>Hello, {name}!</h2>

           <input 
               type="text" 
               placeholder="Enter your ID" 
               value={id} 
               onChange={(e) => setId(e.target.value)} 
           />
           <h2>Your Id: {id}</h2>
       </>
   );
}

export default CustomHook;
