export const addNumber=(randomNumber)=>{ //import this action created inside numbersControl
    return{
        type:'ADD_NUMBER', //next go to reducer and write code repect to this
        payload:randomNumber
    }
}

export const plusTwo=()=>{
    return{
        type:'PLUS_TWO' //it always incremented by +2 so no payload is needed, as its constant.; next go to reducer and write code repect to this
    }
}

export const removeAll=()=>{ //next go to reducer and write code repect to this
    return{
        type:'REMOVE_ALL'
    }
}

export const decrementNumber=(id)=>{//as user gonna pass id which again pass below as payload.
    return{ //next reducer part
        type:'DECREMENT_NUMBER',
        payload:id
    }
}

export const incrementNumber=(id)=>{
    return{
        type:'INCREMENT_NUMBER',
        payload:id
    }
}

export const remove=(id)=>{
    return{
        type:'REMOVE',
        payload:id
    }
}