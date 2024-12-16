const countInitialState = 0

const countReducer=(state = countInitialState, action)=>{//this reducer needs to be imported inside congigureStore as it to be passed inside store.
        switch(action.type){ //switch statement is commonly preferred method whileworking with redux.
            case 'INCREMENT':{
                return state+1
            }
            case 'DECREMENT':{
                return state-1
            }
            case 'RESET':{
                return countInitialState
            }
            case 'INCREMENT_BY':{
                return state+action.payload
            }
            default :{
                return state
            }
        }
    }

    export default countReducer