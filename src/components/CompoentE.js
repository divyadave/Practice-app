import React, { useState, useMemo, useCallback } from 'react'
import ComponentC from './ComponentC'

function CompoentE() {
console.log('App is rendered')
 const [count, setcount] = useState(1)
 const [name, setName] = useState('')
 const result = useMemo(() => {
     return factorial(count)
 }, [count])
 const getName = useCallback(() => {
        return name
    }, [name])
 
    return (
        <div>
            <h1>Factorial of number { count } is <span>{ result }</span></h1>
            <section>
                <button onClick={() => setcount(count + 1)}>Increment</button>
                <button onClick={() => setcount(count - 1)}>Decrement</button>
            </section>
            <label>Enter Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
            <ComponentC displayname={getName}></ComponentC>
            
        </div>
    )
}
function factorial(n) {
    let i = 0;
    while (i < 200000000) i++;
    if(n < 0) {
        return -1;
    }
    if(n === 0) {
        return 1;
    }
    return n * factorial(n - 1)
}

export default CompoentE
