import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { increment } from './actions/countAction';
import { Provider } from 'react-redux';
import { startGetUsers } from './actions/usersAction';

const store= configureStore()//invoke store fun from here itself
console.log(store) //will have access to store object
console.log('store',store.getState())//as we have access to store so get the state value next subscribe the state

store.subscribe(()=>{//called once state value changes
  console.log('state updated', store.getState())
})

store.dispatch(increment())
store.dispatch(startGetUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
               <Provider store={store}>
                        <App/>
               </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
