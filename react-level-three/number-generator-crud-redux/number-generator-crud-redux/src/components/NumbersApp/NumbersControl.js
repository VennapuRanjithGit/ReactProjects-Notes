import React from "react";
import { addNumber, plusTwo, removeAll } from "../../actions/numbersActions";
import { useDispatch } from "react-redux";

const NumbersControl=(props)=>{
    const dispatch= useDispatch()
    const generateNumber=()=>{ //function should always starts with small letter; cap is reserved for component names
         const randomNumber=Math.round(Math.random()*100) //generating a random number which should be added to our array which is inside state i.e inside store but we canot directly add it to the store so need to follow redux work-flow mentioned below.
                                                    //create numbersActions.js in actions to have multiple action methods for adding/deleting etc.
         const num={
            id:Number(new Date()), //to generate unique id for every value use either uuid pack or take current data and convert into a number
            value:randomNumber //now rand num generated next it should be dispatched(use useDispatch hook) to reducer(numbersReducer) >>store
            }
            dispatch(addNumber(num))
       }

    const handlePlusTwo=()=>{
            dispatch(plusTwo())//dispatch and import actionCreator and pass it here 
    }

    const handleRemoveAll=()=>{
        dispatch(removeAll())
    }
   return(
         <div>
                <h2>Numbers control component</h2>
                <button onClick={generateNumber}>Generate</button>
                <button onClick={handlePlusTwo}>+2</button> {/**add actionCreator in numbersAction; next implement remove all feature below */}
                <button onClick={handleRemoveAll}>Remove All</button>
        </div>
        )
}

export default NumbersControl
// ----------flow of redux------
// in UI some event gets triggered>>dispatch>>action>>Reducer(will add that particular item to the state)>>Store(that item stored in store)>>Subscribe(as our components subscribed to the store, any new value gets added to the store those gets reflected on our UI. then to
//to nubmersContainer then to its children.
// so first will create an event handler i.e wn user clicks on a button(Generate) will invoke a function which creates a random number; 
