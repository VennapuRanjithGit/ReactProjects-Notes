import React from "react";
import {useSelector} from 'react-redux' //now we can access state value so use numbers prop which stored in state
import NumbersList from "./NumbersList";
import NumbersControl from "./NumbersControl";
import AddNumber from "./AddNumbers";

const NumbersContainer=(props)=>{
    const numbers=useSelector((state)=>{
        return state.numbers //return the value which we wanna extract from state.
    })

    const findSum=()=>{
        let sum =0 //initially sum be '0' 
        numbers.forEach((ele)=>{ //iterate over numbers which has access to ele which is our object inside array
            sum += ele.value //has random number generated.
        })
        return sum
    }

    return(//length of no of values inside numbersReducer initialState
        <div>
                <h2>Listing - {numbers.length}, Sum - {findSum()}</h2> {/** next read the value from state and use it inside numbers container for this use useSelector hook above*/}
                <NumbersList/><hr/>
                <NumbersControl/>
                <AddNumber/>
        </div> 
    )
}

export default NumbersContainer
// ----------flow of redux------
// in UI some event gets triggered>>dispatch>>action>>Reducer(will add that particular item to the state)>>Store(that item stored in store)>>Subscribe(as our components subscribed to the store, any new value gets added to the store those gets reflected on our UI. then to
//to nubmersContainer then to its children..
// so first will create an event handler i.e wn user clicks on a button will invoke a function which creates a random number

//whenever the state value changs this numbContainer component gets re-rendered then findSum function also gets re-rendered and displayed on the screen.