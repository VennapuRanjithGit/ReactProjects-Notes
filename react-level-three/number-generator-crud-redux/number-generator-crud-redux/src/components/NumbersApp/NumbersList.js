import React from "react";
import { useSelector, useDispatch } from "react-redux";//to access numbers in state variable ; use useselector hook
import { decrementNumber, incrementNumber, remove } from "../../actions/numbersActions";

const NumbersList =(props)=>{
    const numbers=useSelector((state)=>{ //now we have access of numbers from state thru this numbers variable; now map thru it to read it
        return state.numbers
    })

    const dispatch=useDispatch();

    const handleDecrement=(id)=>{ //now this has access to the id; next action part and reducer part
        dispatch(decrementNumber(id))
    }

    const handleIncrement=(id)=>{
        dispatch(incrementNumber(id))
    }

    const handleRemove=(id)=>{
        dispatch(remove(id))
    }

    return(
        <div>
            <h2>Numbers list component</h2>
            <ul>
                {numbers.map((num)=>{ //num is an object which has property called value inside it.
                    return <li key={num.id}>{num.value}
                                        <button onClick={()=>{
                                                handleDecrement(num.id) //based on this id only in reducer gets to knwo which id gets to be updated.
                                        }}>-</button> {/**add remove functionality for individual data/number in list; write inline function and */}
                                        <button onClick={()=>{
                                                handleIncrement(num.id)
                                        }}>+</button>
                                        <button onClick={()=>{
                                            handleRemove(num.id)
                                        }}>X</button>
                            </li> //key is unique id  
                })} {/**next implement sum functionality in numbContainer */}
            </ul>
        </div>
    )
}

export default NumbersList