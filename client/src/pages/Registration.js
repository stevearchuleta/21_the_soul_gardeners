import React, { Component } from 'react';


// class Registration extends Component {

// state = {
//   username: "",
//   password: "" 
// }

// handleChange = (event) => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// }

// handleRegistration = (event) => {
//   const { username, password } = this.state;
//   const { history } = this.props;
//   API.register({ username, password })
//   .then(res => {
//     alert("A new user has been created")
//     history.push("/");
//   })
// }

// render() {
//   const { username, password } = this.state;
//   return (
// <div>

//     <h2>
//       Register
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

//     <div>
//       <button 
//         className="reg-btn btn-primary"
//         onClick={this.handleRegistration}
//         >
//         Register
//         </button>
//     </div>

//     <pre>
//       {JSON.stringify(this.state, null, 2)}
//     </pre>
// </div>
//     )
//   }
// }

// export default Register