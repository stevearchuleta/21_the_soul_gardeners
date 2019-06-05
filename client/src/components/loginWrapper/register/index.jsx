import React, { Component } from 'react';
import API from '../../../utilities/API';

class Registration extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: false
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
   
   
   // start of validation
   let errors = [];
   // check required fields
   
   if(!name || !email || !password || !confirmPassword ) {
  this.setState({ errors: true })
  errors.push( { msg: 'Please complete all of the fields.' });
}
//   // check password match
if(password !== confirmPassword) {
  errors.push( { msg: 'Passwords do not match' });
}
//   // password length
if(password.length < 6){
  errors.push( { msg: 'Password must be at least 6 characters long' }); 
}
if(errors.length > 0) {
  this.setState({ errors: errors })
  } else {
  // validation passed

   API.register({ name, email, password, confirmPassword })
   .then(user => {
    if(user){
      // User already exists
      errors.push({ msg: 'Email address is already registered.' })
      // res.render('register', {
      //   errors: errors,
      //   name: name,
      //   email: email,
      //   password: password,
      // });
    }
    alert("A new registration has been created.")
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
   })
   }
  }

   render() {
   const { name, email, password, confirmPassword, errors } = this.state;
   console.log(this.state)
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
          placeholder="Email:"
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
          placeholder="Password:"
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
            placeholder="Confirm Password:"
            aria-label="Name"
            value={confirmPassword}
            onChange={this.handleChange}
          />
      </div>
   
      <div>
        { errors.length > 0 ? errors.map((err) => (
        <h1>{err.msg}</h1>)) : ``
        }
      </div>
      

      <button className="form-button reg-btn" type="submit"
        
        onClick={this.handleRegistration}
      > 
        Register 
      </button>

    </form>

  )
 }
}

export default Registration