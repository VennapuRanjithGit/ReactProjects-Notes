import { createStore, combineReducers } from 'redux' //import store; create a fun(code for store written below) then export it
import countReducer from '../reducers/countReducer'

const configureStore=()=>{//wn this fun invoked reutrn store obj below
    const store=createStore(combineReducers({ //though we created store and code inside it here but from src/index.js only we ivoke this func from index as index is an entry point of react application 
        count: countReducer
    }))

    return store 
}

export default configureStore
//1. create store inside store folder next countReducer inside reducers folder

