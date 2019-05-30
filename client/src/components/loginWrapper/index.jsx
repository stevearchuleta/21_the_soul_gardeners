import React, { useContext } from 'react';
import './style.css';
// import { Link } from ('react-router-dom');
import { UserContext, UserProvider } from '../../utilities/userContext';
// import { Redirect } from 'react-router-dom';


const loginWrapper = () => {
  const { state, dispatch } = useContext(UserContext); 
  // ***SUNG aslo used '{(props)}' as a paramater above***

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
        {state.currentUser.email}
        <button 
            className="form-button reg-btn" 
            type="submit"
            onClick={() => updateUser({email : "test@test.com"})}
          >Test</button> 
        <div>REGISTER or... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</div>
      </div>

      <form action="http://localhost:3001/auth/local" className="form reg-form" method="POST">
         
          <div className="form-item register">
            <input 
              type="text" 
              className="form-input"
              name="username"          
              placeholder="Name:"
              aria-label="Name"
              autoComplete="off"
              //value={username} 
              //onChange={this.handleChange}
            />  
          </div>

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

          <div className="form-item confirm-password">
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
            className="form-button reg-btn" 
            type="submit"
            onClick={() => updateUser({currentUser : {email : "test@test.com"}})}
          > 
            register 
          </button>
            {/* <Link className="reg-item" to="/register">register</Link> */}

        </form>


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
            {/* <Link className="log-item" to="/login">login</Link> */}

        </form>
    </div>
  );
}


export default loginWrapper
