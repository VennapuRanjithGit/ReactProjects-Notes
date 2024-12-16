import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login=(props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {handleAuth} = props

    const handleSubmit=(e)=>{
        e.preventDefault()

        //client-side validataions
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
            email:email,
            password: password
        }

          //if validation pass
          axios.post('https://reqres.in/api/login',formData) //this axios will convert the formData obj which is in js formate into json which backend api wanted. i.e our formData obj converts into json string by json.stringyfy method.
          .then((response)=>{ 
            const result = response.data
                if(result.hasOwnProperty('erros')){
                    alert(result.errors)
                }else{
                    alert('Login successful.. ') //once login done we need to write/store the 'Token' to local storage so that we can read it from local storage and send it across server
                    localStorage.setItem('token', result.token) //storing token in localStorage; while logout token should be removed
                    navigate('/') //redirect to home
                    handleAuth() //this fun gets invoked which means it becomes true then it shows links> home, contact, logout
                }
          })
          .catch((err)=>{ //if error isnt catched or .catch isnt there then error will be thrown by browsert but cant display to the user so .catch is a must
              console.log(err.message)
          })

    }

    const handleChange=(e)=>{
           if(e.target.name==='email'){
            setEmail(e.target.value)
           }else if(e.target.name==='password'){
            setPassword(e.target.value)
           }
        }

    return(
        <div>
            <h1>Enter your credentials to Login </h1>

            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter email' name='email' onChange={handleChange}></input><br/><br/>
                <input type='password' placeholder='Enter password' name='password' onChange={handleChange}></input><br/><br/>
                
                <input type='submit' value='Login'/> <input type='submit' value='Cancel'/>
            </form>
        </div>
    )
}

export default Login