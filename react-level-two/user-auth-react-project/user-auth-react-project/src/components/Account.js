import React, {useState, useEffect} from "react"; //useState for maintaining any state variable and effect is for wn comp gets rendered we wanna make a request to api server to get the info
import axios from "axios"; //to interact with api server

const Account=(props)=>{
    const [users, setUsers] = useState([]) //initially let user be empty array as data which is there in api is of 

    useEffect(()=>{ //used to making req for api wnvr comp rendered initial time
        axios.get('https://reqres.in/api/users',{ //first arg is url and 2nd arg is configuration object. here to get the info from users it needs token(which is store in our app at local storage) so use it here as 2nd argument
            headers: {
                'x-auth': localStorage.getItem('token') //required token sent via request headers
            }
        }) 
            .then((response)=>{
                const result=response.data.data
                setUsers(result)
            })
            .catch((err)=>{
                //alert(err.message)
                console.log('error fetching users:',err)
            })
    },[]) //[] is dependency empty array i.e this effect gets called only once wn comp rendered 

    return(
        <div>
            <h1>User account page..</h1>
             <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>Email: {user.email}</p>
                        <p>Name: {user.first_name} {user.last_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Account