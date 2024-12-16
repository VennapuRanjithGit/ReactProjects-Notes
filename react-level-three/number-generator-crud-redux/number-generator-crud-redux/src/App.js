import NumbersContainer from "./components/NumbersApp/NumbersContainer";
import UsersList from "./components/Users/UsersList";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <h1>Random Number Generator.</h1>
      <NumbersContainer/><hr/>
      <nav> 
        <Link to='/'>Home</Link> | 
         <Link to='/users'> Users</Link> {/**next add usersReducer */}
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/users' element={<UsersList/>}></Route>
      </Routes>
 
    </div>
    </Router>
  );
}

export default App;

//next create store folder and add configureStore.js which is responsible for creating store