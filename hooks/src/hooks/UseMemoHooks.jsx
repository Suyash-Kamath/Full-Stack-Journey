import React, { useMemo, useState } from "react";

function UseMemoHooks() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNumber(num) {
        console.log('Calculation done!');
        return Math.pow(num, 3);
    }

    // to prevent this function from re-calculating the cube, we can use the useMemo hook
    const result = useMemo(() => cubeNumber(number), [number]);
    // when the component gets re-rendered, it will not execute the cubeNumber function.
    // It will only execute the function when the 'number' state changes.

    return (
        <>
            <input 
                type="number" 
                value={number} 
                onChange={(event) => setNumber(Number(event.target.value))} 
            />
            <h1>Cube of the Number: {result}</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter++</button>
            <h1>Counter: {counter}</h1>
        </>
    );
}

export default UseMemoHooks;
