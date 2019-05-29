// import React, { Component } from 'react';
// import API from '../utilities/API';
// import UserContext from '../utilities/UserContext';

// class Login extends Component {

// state = {
//   username: "",
//   password: "", 
//   error: null
// }

// handleChange = (event) => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// }

// handleLogin = (onLogin) => {
//   const { username, password } = this.state;
//   const { history } = this.props;

//   API.login({ username, password })
//   .then(res => {
//     onLogin(res.data); 
//     history.push("/");
//   })
//   .catch(err => { this.setState({ error: "The Username and Password do not match."}); 
//    })
// }

// render() {
//   const { username, password } = this.state;
//   return (

//   <UserContext.Consumer> 
//    {({onLogin}) => (



// <div>

//     <h2>
//       Login
//     </h2>

//     <div>
//       <label>
//         User Name
//       </label>
//       <input 
//         autoComplete="off"
//         name="username"          
//         value={username} 
//         onChange={this.handleChange}
//       />
//     </div>

//     <div>
//       <label>
//         Password
//       </label>
//       <input
//       name="password"
//       type="password"
//       value={password}
//       onChange={this.handleChange}
//       />
//     </div>
//    {this.state.error ? (
//    <span className="alert">{this.state.error}</span>
// )} : null}
//     <div>
//       <button 
//         className="reg-btn btn-primary"
//         onClick={() => this.handleLogin(onLogin)}
//         >
//         Login
//         </button>
//     </div>

//     <pre>
//       {JSON.stringify(this.state, null, 2)}
//     </pre>
// </div>


//  )}
//  </UserContext.Consumer>


//     )
//   }
// }

// export default Signup