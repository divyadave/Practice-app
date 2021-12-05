import React from 'react'
import { useState } from 'react';
import HooksCounterThree from './HooksCounterThree';

export default function HooksCounter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const [display, setdisplay] = useState(false)

    const incrementBy = () => {
        for (let index = 0; index < 5; index++) {

            setCount(prevSate => prevSate + 1)
            console.log(count)
            
        }

    }

    
    return (
        <div>
            Count: {count}
            <button onClick={()=> setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
            <button onClick={incrementBy}>Increment by 5</button>
            <button onClick={() => setdisplay(!display)}></button>
            { display && <HooksCounterThree></HooksCounterThree>}
            
        </div>
    )
}
