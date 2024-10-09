import { createContext } from "react";

export const AppContext=createContext();

const ContextProvider=(props)=>{
    const phone = "+1 123456789"
    const name="Suyash"
    return(
        <AppContext.Provider value={{phone,name}}> 
           { /* value will return to the components where we want to send the data using context
           and also to send multiple data as a prop , use curly braces */}
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider
// This is done , the first step on creating the context
// Second step is to provide the context , this is done by adding context support to react project by wrapping the <App/> using Context Provider