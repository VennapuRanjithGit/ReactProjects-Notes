import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "./actions/countActions";


const Btn=(props)=>{ //this is to just demonstrate by using redux config we can pass info at component level without using props
    const dispatch= useDispatch()

    return(
        <button onClick={()=>{
            dispatch(increment())
        }}>+1 btn from a different component</button>
    )
}

export default Btn