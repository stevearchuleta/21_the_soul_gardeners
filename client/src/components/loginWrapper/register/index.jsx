import React, { Component } from 'react';
import API from '../../../utilities/API';
 

class Registration extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
    [name]: value
    });
  }

  handleRegistration = (event) => {
   event.preventDefault();
   
   const { name, email, password, confirmPassword } = this.state;
   console.log(name, email, password, confirmPassword);
   
   API.register({ name, email, password, confirmPassword })
   .then(res => {
    alert("A new registration has been created.")
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
   })
   }

   render() {
   const { name, email, password, confirmPassword } = this.state;
   return (

    <form className="form reg-form" >
        
      <div className="form-item register">
        <input
          type="text" 
          className="form-input"
          name="name"          
          placeholder="Name:"
          aria-label="Name"
          autoComplete="off"
          value={name} 
          onChange={this.handleChange}
          >
        </input>  
      </div>

      <div className="form-item email">
        <input 
          type="email:" 
          className="form-input"
          name="email"
          placeholder="emaiil:"
          aria-label="email"
          autoComplete="off"
          value={email} 
          onChange={this.handleChange}
          >
        </input>
      </div>
      
      <div className="form-item password">
        <input 
          type="text" 
          type="password"
          className="form-input"
          name="password"
          placeholder="password:"
          aria-label="Name"
          value={password}
          onChange={this.handleChange}
        />
      </div>

      <div className="form-item confirm-password">
        <input 
            type="text" 
            type="password"
            className="form-input"
            name="confirmPassword"
            placeholder="password:"
            aria-label="Name"
            value={confirmPassword}
            onChange={this.handleChange}
          />
      </div>

      <button className="form-button reg-btn" type="submit"
        
        onClick={this.handleRegistration}
      > 
        register 
      </button>

    </form>

  )
 }
}

export default Registration