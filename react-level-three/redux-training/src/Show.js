import React from "react";
import { useSelector } from "react-redux";

const ShowCount=(props)=>{
    const count=useSelector((state)=>{
        return state.count
    })
    
    return(
        <h2>Count of the state - {count}</h2>
    )
}

export default ShowCount