import axios from 'axios'
import React, {useReducer, useEffect} from 'react'
import ComponentC from './ComponentC'

const initialState = 0
const initialLoading = {
    loading: false,
    error: '',
    post: {}
}

const loadingReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something failed',
                post: {}
            }
        default:
            return state
    }
}

const counterReducer = (state, action) => {
    console.log(state)
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
      
        case 'reset':
            return initialState;
        default:
            return state;
    }

}


export const testContext = React.createContext()


function ComponentA() { 
   const [count, dispatch] = useReducer(counterReducer, initialState)
   const [state, loaderDispatch] = useReducer(loadingReducer, initialLoading)
   
   useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
           loaderDispatch({type: 'FETCH_SUCCESS', payload: res.data })

       })
       .catch(error => {
           loaderDispatch({type: 'FETCH_ERROR'})
       })
      
   }, [])

    return (
        <div>
            {
                state.loading ? 'Loading': state.post.title
            }
            {
                state.error ? state.error : null
            }
            {count}
             <testContext.Provider value={{ countState: count, countDispatch: dispatch}}>
                <ComponentC></ComponentC>
                </testContext.Provider>
            
            
        </div>
    )
}

export default ComponentA
