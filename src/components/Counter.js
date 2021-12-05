import React, {useState} from 'react'
import useCounter from './useCounter'

function Counter() {
    const [counter, increment, decrement, reset] = useCounter(10, 10)

    return (
        <div>
            <p>Count: { counter }</p>
            <button type="button" onClick={increment}> Increment </button>
            <button type="button" onClick={decrement}> Decrement </button>
            <button type="button" onClick={reset}> Reset </button>
            
        </div>
    )
}

export default Counter
