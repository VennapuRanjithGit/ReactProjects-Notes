import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar'

const App=(props)=>{
    const [userLoggedIn, setUserLoggedIn] = useState(false) //initial userstate value is false next pass it below as prop next use it in navBar comp

    const handleAuth=()=>{
        setUserLoggedIn(!userLoggedIn) //if its true then will show respective links else other links; now pass this func below as props to navbar and use it inside navbar at login route path
    }

    useEffect(()=>{ //this effect fun helps to not to rerender the page to root state; for eg: we logged in; if we refresh the page it wont show login once again. with this effect it will show.
        if(localStorage.getItem('token')){ //if its truthy value i.e token is present in local storage then invoke the handleAuth which is false
            handleAuth()
        }
    },[]) //so this helps us not to rerender the page instead keeps it in the same page.

    return(
        <div>
            <h1>User Authentication</h1>
            <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/> 
        </div>
    )
}

export default App


//1. import Link for linking navigation names
//2. import Route comp use it in div to navigate to resp paths mentioned