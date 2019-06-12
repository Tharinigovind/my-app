import React, { Component } from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={firstName:"",
      lastName:'',
     email:'',
password:''}}
clicked(e){
  this.setState({
    firstName:e.target.value
  })}
  clickedd(e){
  this.setState({
    lastName:e.target.value
  })}
  clickedemail(e){
  this.setState({
    email:e.target.value
  })
  }
render (){ 
  return (
    <div>
    <label htmlFor="firstName">FirstName</label><br/>
    <input type="text" name="firstName" onChange={this.clicked.bind(this)}/><br/>
    
    <label htmlFor="lastName">LastName</label><br/>
 <input type="text"  onChange={this.clickedd.bind(this)}/><br/>
  
  <label htmlFor="email">Email</label><br/>
 <input type="keypad" name="email"   onChange={this.clickedemail.bind(this)}/><br/>
 
 <label htmlFor="password">Password</label><br/>
<input type="password"/><br/>
 
 <button type="button" onClick={()=>{this.clicked.bind(this)}}>Login</button>
<h3>{this.state.firstName}</h3>
<h3>{this.state.lastName}</h3>
<h3>{this.state.email}</h3>
</div>
  );
}
}
export default App;
