import React, { useContext } from 'react';
import './style.css';
import { UserContext, UserProvider } from '../../utilities/userContext';
import { ErrorContext, ErrorProvider } from '../../utilities/errorContext';
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
  const { xxxxx, yyyyy } = useContext(ErrorContext);
  
   const updateUser = user => {
     console.log(user);
    dispatch({ type: "setUser", value: user });
  }

  const updateError = error => {
    console.log(error);
    dispatch({ type: "setError", value: error });
  }
  
  return(
    <div className="card item login">
      <div className="card-header">
        <div>REGISTER or... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</div>
      </div>

      <Register />
      <Login updateUser={updateUser} updateError={updateError}/>
    </div>
  );
}

export default loginWrapper
