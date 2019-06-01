import React, { useContext } from 'react';
import './style.css';
import { UserContext, UserProvider } from '../../utilities/userContext';
import Register from './register';


// import { Redirect } from 'react-router-dom';

// state = {
//   username: "",
//   password: "", 
//   error: null
// }

const loginWrapper = (props) => {
  const { state, dispatch } = useContext(UserContext);

  const handleChange = (event) => {
    // const { username, value } = event.target;
    // const { email, value } = event.target;
    // const { password, value } = event.target;
    // const { confirmPassword, value } = event.target;
    
    // this.setState({
    // [name]: value,
    // [username]: value,
    // [password]: value,
    // [confirmPassword]: value
    // });
  }

   const handleRegistration = (event) => {
    // const { name, username, password, confirmPassword } = this.state;
    // const { history } = this.props;
    // API.register({ name, username, password, confirmPassword })
    // .then(res => {
    // alert("A new user has been created")
    // this.props.updateUser(res.data)
    // history.push("/");
    // })
   }
  
   const updateUser = user => {
     console.log(user);
    dispatch({ type: "setUser", value: user });
  }
  
  return(
    <div className="card item login">
      <div className="card-header">

      
        <div>REGISTER or... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</div>
      </div>

      <Register />


        <form action="http://localhost:3001/auth/local" className="form reg-form" method="POST">
         
          <div className="form-item email">
            <input 
                type="email:" 
                className="form-input"
                name="email"
                placeholder="emaiil:"
                aria-label="email"
                autoComplete="off"
                //value={username} 
                //onChange={this.handleChange}
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
               //value={password}
               //onChange={this.handleChange}
              /> 
          </div>

          <button 
            className="form-button log-btn" 
            type="submit"
            //onClick={() => this.handleLogin(onLogin)}
          > 
          login 
          </button>
           

        </form>
    </div>
  );
}


export default loginWrapper
