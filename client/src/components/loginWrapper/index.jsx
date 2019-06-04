import React, { useContext } from 'react';
import './style.css';
import { UserContext, UserProvider } from '../../utilities/userContext';
import Register from './register';
import Login from './login';


// import { Redirect } from 'react-router-dom';

// state = {
//   username: "",
//   password: "", 
//   error: null
// }

const loginWrapper = (props) => {
  const { state, dispatch } = useContext(UserContext);

  const handleChange = (event) => {
  
  }

   const handleRegistration = (event) => {
  
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
      <Login updateUser={updateUser} />
    </div>
  );
}


export default loginWrapper
