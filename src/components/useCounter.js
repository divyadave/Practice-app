import React, { useState } from 'react'

export default function useCounter(initialState = 0, value) {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCounter(prevCount => prevCount - value)
    }
    
    const reset = () => {
        setCounter(initialState)
    }

    return [counter, increment, decrement, reset]
  
}
