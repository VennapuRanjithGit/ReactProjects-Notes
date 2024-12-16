const usersInitialState=[] //as we will be dealing with users mulitple array of info

const usersReducer = (state= usersInitialState, action)=>{ //return its state value below ; next import this inside configureStore
    switch(action.type){
        case 'SET_USERS':{
            return [...action.payload]
        }

        default:{
            return [...state] //default/current state value
        }
    }
}

export default usersReducer