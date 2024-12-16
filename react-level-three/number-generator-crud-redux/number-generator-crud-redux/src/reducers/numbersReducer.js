const numbersInitialState=[]

const numbersReducer =(state=numbersInitialState, action)=>{
    switch(action.type){
        case 'ADD_NUMBER':{
            return [...state, {...action.payload}] //if actions see type as add_number then return existing state value and also spread action.payload
        } //so here ...state is our array for which we are adding new object i.e ...action.payload. thus reducer returns new state and updated it to store

        case 'PLUS_TWO':{
            return state.map((num)=>{
                return{
                    ...num, //will return exisiting num property value then increme by 2. //next write an event handler and invoke it in numbersControl
                    value:num.value+2
                }
            })
        }

        case 'REMOVE_ALL':{ //whenever cas is removeall then return empty array ; next import this action method in numbControl and use it.
            return []
        }
        
        case 'DECREMENT_NUMBER':{ //here need to loop/mapp thru state and access each element as it is each element so use if else cond inside it
            return state.map((ele)=>{
                if(ele.id===action.payload){ //here id which passed by user payload is id which is there inside the list
                    return {...ele, value: ele.value-1}//by removing -1 from that particular element then return it.
                }else{ 
                    return {...ele}
                }
            })
        }
        case 'INCREMENT_NUMBER':{
            return state.map((ele)=>{
                if(ele.id===action.payload){
                    return {...ele, value: ele.value+1}
                }else{
                    return {...ele}
                }
            })
        }

        case 'REMOVE':{
            return state.filter((ele)=>{
                return ele.id!==action.payload
            })
        }

        default:{
            return [...state]//deep copy of an array
        } //now we have to read the list which generated and sisplay as unordered list inside numberlist comp
    }     
}

export default numbersReducer

//