import React, {useReducer} from 'react'
import ComponentC from './ComponentC';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
    
}
const counterReducer = (state, action) => {
    console.log(state)
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
                return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
               return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState;
        default:
            return state;
    }

}

function ComponentB() {
  const [count, dispatch] = useReducer(counterReducer, initialState)

    
    return (

        <div>
            <h1>{count.firstCounter}</h1>
            <h2>{ count.secondCounter }</h2>
        <button onClick={() => dispatch({type: 'increment', value: 2})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 2})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment2', value: 2})}>Second Counter Increment</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 2})}>Second Counter Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <ComponentC></ComponentC>
            
        </div>
    )
}
export default ComponentB;
