import { useReducer, useRef, useEffect, useState } from "react";
import { Route } from "react-router";
import CompoentE from "./CompoentE";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";
import FetchData from "./FetchData";
import HooksCounter from "./HooksCounter";


const Welcome = () => {
    const inputRef = useRef(null)
    const [timer, setTimer] = useState(0)
    const [name, setName] = useState('');
    const timerRef = useRef()
    const previousRef = useRef("")
    const [counter, setCounter] = useState(0)
    useEffect(() => {
      /*  inputRef.current.focus() */
      previousRef.current = counter;
       timerRef.current = setInterval(() => {
           setTimer(previousTimer => previousTimer + 1)
           
       }, 1000);
       return () => {
           clearInterval(timerRef.current)

       }
    }, [counter])
  
    const initialState = {
        isRunning: false,
        time: 0
    }
  
    function reducer(state, action) {
        switch(action.type) {
            case 'start': 
            return {...state, isRunning: true}
            case 'stop':
            return { ...state, isRunning: false}
            case 'reset':
            return { isRunning: true, time: 0}
            case 'tick':
            return { ...state, time: state.time + 1}
            default:
                throw new Error();

        }
    }
    function counterReducer (state, action) {
        console.log(state)
        switch(action) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                throw new Error();
        }

    }
    const resetHandler = () => {
        setName("")
        inputRef.current.focus()
    }
    
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [count, dispatchCounter] = useReducer(counterReducer, 0)
   
    
    return (
        <section>
        <h1>Welcome to page</h1>
        <CompoentE></CompoentE>

        <section>
            <h2>Use Ref</h2>
            <input type="text" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={resetHandler}>Reset</button>
            <div>
                <h2>Random Counter: {counter }</h2>
                {
                    typeof previousRef.current !== 'undefined' && (
                        <h2>Previous Counter: { previousRef.current }</h2>
                    )

                }
                <button onClick={() => setCounter(Math.ceil(Math.random() * 100))}>Reset Counter</button>
            </div>
        </section>
        <section>
            <h2>Timer Ref</h2>
            <p>Timer: { timer }</p>
            <button type="button" onClick={clearInterval(timerRef.current)}>Clear Timer</button>
        </section>
   
        <ComponentB></ComponentB>
        {state.time}s
        <button onClick={()=> dispatch({type: 'start'})}>Start</button>
        <button onClick={()=> dispatch({type: 'stop'})}>Stop</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        <button onClick={()=> dispatch({type: 'tick'})}>Tick</button>
        <div>
        {count}
        <button onClick={() => dispatchCounter('INCREMENT')}>+</button>
        <button onClick={() => dispatchCounter('DECREMENT')}>-</button>
        </div>
        <div>
            

            </div>
       
        <Route path="/welcome/user">
            <p>Welcome to this page new user!</p>
            <HooksCounter></HooksCounter>
            <FetchData></FetchData>
            <section>
                <ComponentD></ComponentD>
            </section>
            
          {/*   <HooksCounterThree></HooksCounterThree> */}

        </Route>
        </section>
    )

}
export default Welcome;