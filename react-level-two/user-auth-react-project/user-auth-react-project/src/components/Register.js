import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register=(props)=>{
    //const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        // Client-side validation
    if (!email || !password) {
        alert("All fields are required!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

        const formData={
            //username: username,
            email: email,
            password: password
        }


        //if validation pass
        axios.post('https://reqres.in/api/register',formData) //this axios will convert the formData obj which is in js formate into json which backend api wanted. i.e our formData obj converts into json string by json.stringyfy method.
                .then((response)=>{ 
                    const result = response.data
                    if(result.hasOwnProperty('errors')){ //sometimes even its a 200ok status still there might be few erros in result so to handle errore inside the result we use this property
                        alert(result.message)//will alert with the message of error
                    }else{
                        alert('Account successfully created.. \nNow, You will be redirected to Login page.')//as per our requ; once registration done it should redirect to login page; 
                        navigate('/login')//other way to redirect without using redirect method.
                    }
                })
                .catch((err)=>{ //if error isnt catched or .catch isnt there then error will be thrown by browsert but cant display to the user so .catch is a must
                    alert(err.message)
                })
    }

    const handleChange=(e)=>{
    //    if(e.target.name==='username'){
    //     setUsername(e.target.value)
    //    }else 
       if(e.target.name==='email'){
        setEmail(e.target.value)
       }else if(e.target.name==='password'){
        setPassword(e.target.value)
       }
    }

    return(
        <div>
            <h2>Register With Us</h2>

            <form onSubmit={handleSubmit}>
                {/* <input type='text' placeholder='Enter username' name='username' onChange={handleChange}></input><br/><br/> */}
                <input type='email' placeholder='Enter email' name='email' onChange={handleChange}></input><br/><br/>
                <input type='password' placeholder='Enter password' name='password' onChange={handleChange}></input><br/><br/>

                <input type='submit' value='Register'/> <input type='submit' value='Cancel'/>
            </form> 
        </div>
    )
}

export default Register