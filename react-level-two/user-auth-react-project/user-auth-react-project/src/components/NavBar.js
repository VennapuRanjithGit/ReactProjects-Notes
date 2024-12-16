import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom' //for linking navigation names etc, now use it below. //
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";

const NavBar=(props)=>{ //create a separate js file name it NavBar and render this comp from App. this for organizing our files and code properly which is must fro efficient running.
    const {userLoggedIn, handleAuth} = props //below do conditional rend to decide wt to be shown if user logs in.
    const navigate = useNavigate();

    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li> {/**home will be constant irrespective of user login so conditional render for below ones*/}

                {userLoggedIn ? (
                    <React.Fragment> {/**removed div tag and add this fragment as in inspect it all childs will be grouped together. or shortcut for the same is <></> */}
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to = '/' onClick={(e)=>{
                            e.preventDefault(); //// Prevent default link navigation
                            localStorage.removeItem('token')//user logs out then to remove the token from localstorage.
                            alert('Successfully logged out..\nNow you will be redirected to Home page')
                            handleAuth() //updates logged in state
                            navigate('/') //redirected to Home
                        }}>Logout</Link></li>  {/** on click of logout links> home, register, login to be appeared. */}
                    </React.Fragment>
                ) : (
                    <>  {/**shortcut for React.Fragment */}
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li> {/**login is just a child inside navbar which is indirectly child of app component. On click of login links home, acnt, logout to be shown for that create a call back fun inside app comp and pass it as prop to navbar and invoke it in nav bar at login route path*/}
                    </>
                )}
            </ul>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                {/*<Route path='/login' element={<Login/>}/>*/}{/**comment this as we need to pass handleAuth func here */}
                <Route path="/login" element={
                    <Login {...props} handleAuth={handleAuth} 
                    />}/>    {/**this acts as route path as well as it has access to handleAuth func also along with all props above; now destructure it in login comp and invoke it in else to get requ links on click of login*/}
                <Route path='/account' element={<Account/>}/>
            </Routes>
        </div>
    )
}

export default NavBar