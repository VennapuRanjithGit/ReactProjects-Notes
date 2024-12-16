//here all the acitons for our countReducer will be written i.e increm, decr, reset etc i.e exporting multiple actions in thru same file

export const increment=()=>{
    return{
        type: 'INCREMENT'
    }
}

export const decrement=()=>{
    return{
        type: 'DECREMENT'
    }
}

export const reset=()=>{
    return{
        type: 'RESET'
    }
}

export const incrementBy=(n)=>{
    return{
        type:'INCREMENT_BY',
        payload:n
    }
}

//to import these, object destructuring should be done. do this in index.js to have access of this actions

//next install react-redux: npm install react-redux then import provider from it in index.js