import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState={
 firstName:'',
 lastName:'',
 email:'',
 password:''  };
function reducer(state = initialState, action) {
  console.log('login page')
  switch(action.type) {
case 'firstName':
      return {
        firstName: state.firstName
       };
case 'lastName':
           return {
            lastName:state.lastName
       };
case 'email':
      return {
        email:state.email
       };
    default:
    return state
  }
}
const store=createStore(reducer);
const AppFull = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
ReactDOM.render(<AppFull />, document.getElementById('root'));
