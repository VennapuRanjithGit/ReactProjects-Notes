//as reducers are regular javascript functions so no libraries to be imported.

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

    //     if(action.type==='INCREMENT'){ //refractor the code with switch and case(best practice)
//         return state+1
//     }else if(action.type==='DECREMENT'){
//         return state-1
//     }else if(action.type==='RESET'){
//         return countInitialState
//     }else if(action.type==='INCREMENT_BY'){
//         return state+action.payload
//     }else{
//         return state
//     }
}

export default countReducer 

//as per our requirement we should increment, decrement , rese and increment by a number etc so create mulitple actions in actions folder and group them 