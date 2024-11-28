//eco system of create react-app

//1. import react lib
import React from 'react'
import QuotesContainer from './QuotesContainer'

//2. create func expression or func declaration. let us go with fun exp 
//our App component
const App =(props)=>{
    return(
      <div>
        <h1>Quote Book</h1>
        <QuotesContainer/> {/*imported above now used it here */}
      </div>
    )
}

//3. till here the App comp isnt available outside for that it should first be exported, to do that first it need to be imported i.e Now it is available on your browser
export default App













//===============================
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/