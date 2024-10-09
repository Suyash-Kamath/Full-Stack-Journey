// import React,{useReducer} from 'react'

// function UseReducerHook(){


//     // useReducer(reducer,{count:0})
//     // reducer function and default state

//     const initialState={count: 0}
//     const reducer = (state,action)=>{
//         switch (action.type) {
//             case 'increase':{
//                 return {count:state.count+1}
//             }
//                 case 'decrease':{
//                     return {count:state.count-1}
//                 }
            
//                 case 'input':{
//                     return {count:action.payload}
//                 }
//             default:{
//                 return state
//             }
                
//         }
//         // state.count is because from useReducer, we will get state and in this state , we have the object count property
//         // to acess the count, we write state.count
//     }
//    const [state,dispatch] =  useReducer(reducer,initialState)
//     // this returns one array same as useState Hook
//     // dispatch method will call reducer function and this function will update
//     // we will pass action inside the dispatch
//     return(
//         <>
//         <h1>{state.count}</h1>
//         <button onClick={()=> dispatch({type:'increase'})}>Increase</button>
        
//         <button onClick={()=>dispatch({type: 'decrease'})}>Decrease</button>
//         <br></br>
//         <input value={state.count} onChange={(event)=>dispatch({type:'input',payload:Number(event.target.value)})} type="number" />
//         </>
//     )
// }


// export default UseReducerHook


import React, { useReducer } from 'react';

function UseReducerHook() {

    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': {
                return { count: state.count + 1 };
            }
            case 'decrease': {
                return { count: state.count - 1 };
            }
            case 'input': {
                return { count: action.payload };
            }
            default: {
                return state;
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
            <br />
            <input 
              value={state.count} 
              onChange={(event) => dispatch({ type: 'input', payload: Number(event.target.value) })} 
              type="number" 
            />
        </>
    );
}

export default UseReducerHook;
