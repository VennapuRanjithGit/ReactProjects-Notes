import React, {useEffect} from "react";
import { startGetUsers } from "../../actions/usersAction";
import { useSelector, useDispatch } from "react-redux"  //now display the userList on ui; so use selector hook

const UsersList=(props)=>{ //earliar here in this components we would have used useEffect hook and made API call. but here we are under REDUX environment so will invoke action creator wihtin will write necessary code to fetch usersList data from the Server.but still will trigger action creator from the component but not api call i.e we wont use AXIOS here; so user useEffect hook above 
    const dispatch=useDispatch()
    const users =  useSelector((state)=>{
        return state.users //now users data in state is available to access below
    })
    useEffect(()=>{
        //invoke a action creator then dispatch it below
        dispatch(startGetUsers())
    },[])//callback fun adn empty array(i.e dependency list indicates this needs to be executed)

    return(
        <div>
            <h1>UsersList component - {users.length}</h1>
            <ul>
               {users.map((user)=>{
                   return (
                   <div>
                        <li>{user.name}</li> 
                        <li>{user.address.street}</li>
                   </div>)
               })}
            </ul>
        </div>
    )
}

export default UsersList