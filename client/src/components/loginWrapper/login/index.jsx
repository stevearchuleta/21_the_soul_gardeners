import React, { Component } from 'react';
import './style.css';
import UserContext from '../utilities/UserContext';
import { Redirect } from 'react-router-dom';


class login extends Component {
  
  state = {
   email: "",
   password: ""
}

handleChange = (event) => {
   const { email, value } = event.target;
   const { password, value } = event.target;
   
   this.setState({
   [email]: value,
   [password]: value,
   error: null
   });
  }

   handleLogin = (onLogin) => {
   const { email, password } = this.state;
   
   API.login({ email, password })
   .then(res => {
   alert("You have successfully logged in"),
   onLogin(res.data);
   })
   .catch(err => { 
   this.setState(err)
   })
   }
  

   render() {
    return(
    
    <UserContext.Consumer>
  
    {({user}) => (   
      
        <form className="form log-form">
         
          <div className="form-item email">
            <input 
                type="email:" 
                className="form-input"
                name="email"
                placeholder="emaiil:"
                aria-label="email"
                autoComplete="off"
                value={username} 
                onChange={this.handleChange}
             />
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

          <button 
            className="form-button log-btn" 
            type="submit"
            onClick={() => this.handleLogin(onLogin)}
          > 
          login 
          </button>
        </form>

        )
      }
     

    </UserContext.Consumer>
    )
  }
}

export default login