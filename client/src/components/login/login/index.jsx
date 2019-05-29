// import React, { Component } from 'react';
// import './style.css';
// import { Link } from ('react-router-dom');
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';


// class login extends Component {
  // const { user } = props; ***SUNG aslo used '{(props)}' as a paramater above***
  
  
  // state = {
//    email: "",
//    password: ""
// }

// handleChange = (event) => {
//    const { email, value } = event.target;
//    const { password, value } = event.target;
//    
//    this.setState({
//    [email]: value,
//    [password]: value,
//    });
// }

//    handleLogin = (event) => {
//    const { email, password } = this.state;
//    const { history } = this.props;
//    API.login({ email, password })
//    .then(res => {
//    alert("You have successfully logged in")
//    history.push("/");
//    })
//    }
  
  // return(
  //   render() {
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 
    // <div className="card item login">
    {/* I WANT THE WELCOME TO BE PLACED IN THE HEADER SECTION */}
    {/*  {user ? (   */}
    {/* <div>Welcome, {user.username}</div> */}
    {/*   ) :   (     */}
      
      // <div className="card-header">
      //    <div>
      //      REGISTER or... 
      //      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      //      LOGIN
      //    </div>
      // </div>

        // <form 
        // action="http://localhost:3001/auth/local" 
        // className="form log-form" 
        // method="POST">
         
        //   <div className="form-item email">
        //     <input 
                // type="email:" 
                // className="form-input"
                // name="email"
                // placeholder="emaiil:"
                // aria-label="email"
                // autoComplete="off"
                // value={username} 
                // onChange={this.handleChange}
          //    />
          // </div>
          
          // <div className="form-item password">
          //   <input 
              //  type="text" 
              //  type="password"
              //  className="form-input"
              //  name="password"
              //  placeholder="password:"
              //  aria-label="Name"
              //  value={password}
              //  onChange={this.handleChange}
          //    /> 
          // </div>

          // <button 
            // className="form-button log-btn" 
            // type="submit"
            // onClick={() => this.handleLogin(onLogin)}
          // > 
          // login 
          // </button>
            {/* <Link className="log-item" to="/login">login</Link> */}

    //     </form>
    // </div>



      // )} I think that these closing characters are from line 12 above
     
      // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
//     }
//   );
// }


// export default login