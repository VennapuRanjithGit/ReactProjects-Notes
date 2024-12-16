import React, {useState} from "react"; //as this component contains a form  and make this as a controlled component hence we use useState hook
//while working with REDUX we can not only maintain storage in redux state but also can use local storage. To implement this
//we created this component
import { addNumber } from "../../actions/numbersActions";
import { useDispatch } from "react-redux";

const AddNumber=(props)=>{
    const [number, setNumber] = useState('')
    const dispatch=useDispatch()

    const handleChange=(e)=>{
         setNumber(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const num={
            id:Number(new Date()),
            value: Number(number)
        }//next dispatch it as we already have addNumber action creator so we could re-use the same one for this; and we dont need of action creator and reducer part again 
        dispatch(addNumber(num)) //now we can not only generate a new random number by click on generate but also by entering any number value in input field will generate a new random number
        setNumber('') //once after entering/seraching for new randomNumber thru search box it will reset to empty
    }   

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='number' value={number} onChange={handleChange} placeholder="Only numbers allowed..."/>
            </form>
        </div>
    )
}

export default AddNumber