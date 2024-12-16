import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux' //applyMiddleware if for asynchronous functions
import countReducer from '../reducers/countReducer'
import numbersReducer from '../reducers/numbersReducer'
import {thunk} from 'redux-thunk' //first make use of applymiddleware below then pass thunk as an argument to the applymiddle
import usersReducer from '../reducers/usersReducer'

const configureStore =()=>{
    const store=createStore(combineReducers({ 
        count: countReducer,
        numbers: numbersReducer,
        users: usersReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore