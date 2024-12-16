//if action performing any async oper then it is(aciton) prefixes with keyword 'start/async'
import axios from 'axios' //use it below to make api call to server

export const startGetUsers=()=>{
    return(dispatch)=>{
        //here will make api call to server using axios then dispatch to store in usersList component
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const users= response.data
                dispatch(setUsers(users))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const setUsers=(users)=>{
    return{
        type:'SET_USERS',
        payload: users
    }
}