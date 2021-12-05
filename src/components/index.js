const redux = require('redux')
const logger = require('redux-logger')
const createStore = redux.createStore
const reduxLogger = logger.createLogger()
const middleWare = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

const initialState = {
    numCakes: 10
}
const initialIceState = {
    numIcecreams: 20
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Buying cake'
    }

}
function buyIce() {
    return {
        type: BUY_ICE,
        info: 'Buying Ice cream'
    }

}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
        return {
            ...state,
            numCakes: state.numCakes - 1
        }
        default: 
        return state

    }

}

const icecreamReducer = (state= initialIceState, action) => {
    switch(action.type) {
        case BUY_ICE:
            return {
                ...state,
                numIcecreams: state.numIcecreams - 1
            }
        default:
            return state
    }
}
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer, middleWare(reduxLogger))

console.log('Inital state', store.getState())
/* store.subscribe(() => console.log('Updated state', store.getState()))  */
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())


