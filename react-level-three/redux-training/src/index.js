import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { increment,decrement,incrementBy,reset } from './actions/countActions'; //now each of these available independently
//now dispatch these actions to store
import {Provider} from 'react-redux'

const store= configureStore()//invoke store fun from here itself
console.log(store) //will have access to store object
console.log('store',store.getState())//as we have access to store so get the state value next subscribe the state

store.subscribe(()=>{//called once state value changes
  console.log('state updated', store.getState())
})

store.dispatch(increment()) //once countReducer has actions updated then will get the actual value of this 
// store.dispatch(decrement())
// store.dispatch(reset())
// store.dispatch(incrementBy)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//we pass the store to the provider component then all the nested components now have access to the store object next in app.js read the state value which present in store and display it on the store using useSelector hook from react-redux lib
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
