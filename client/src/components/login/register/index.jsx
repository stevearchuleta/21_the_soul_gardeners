// import React, { Component } from 'react';
 



// class Registration extends Component {

// state = {
//    username: "",
//    email: "",
//    password: "",
//    confirmPassword: ""
// }

// handleChange = (event) => {
//    const { username, value } = event.target;
//    const { email, value } = event.target;
//    const { password, value } = event.target;
//    const { confirmPassword, value } = event.target;
//    
//    this.setState({
//    [name]: value,
//    [username]: value,
//    [password]: value,
//    [confirmPassword]: value
//    });
// }

//    handleRegistration = (event) => {
//    const { name, username, password, confirmPassword } = this.state;
//    const { history } = this.props;
//    API.register({ name, username, password, confirmPassword })
//    .then(res => {
//    alert("A new user has been created")
//    history.push("/");
//    })
//    }

//    render() {
//    const { name, username, password, confirmPassword } = this.state;
//    return (

 
// <div className="card-header">
//   <div>
//        REGISTER or... 
//        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//        LOGIN
//   </div>
// </div>

//    <form 
//    action="http://localhost:3001/auth/local" 
//    className="form reg-form" 
//    method="POST">
   
//     <div className="form-item register">
//       <input 
//         // type="text" 
//         // className="form-input"
//         // name="username"          
//         // placeholder="Name:"
//         // aria-label="Name"
//         // autoComplete="off"
//         // value={username} 
//         // onChange={this.handleChange}
//       />  
//     </div>

//     <div className="form-item email">
//       <input 
//         // type="email:" 
//         // className="form-input"
//         // name="email"
//         // placeholder="emaiil:"
//         // aria-label="email"
//         // autoComplete="off"
//         // value={username} 
//         // onChange={this.handleChange}
//         />
//     </div>
    
//     <div className="form-item password">
//       <input 
//       // type="text" 
//       // type="password"
//       // className="form-input"
//       // name="password"
//       // placeholder="password:"
//       // aria-label="Name"
//       // value={password}
//       // onChange={this.handleChange}
//       />
//     </div>

//     <div className="form-item confirm-password">
//       <input 
//           // type="text" 
//           // type="password"
//           // className="form-input"
//           // name="password"
//           // placeholder="password:"
//           // aria-label="Name"
//           // value={password}
//           // onChange={this.handleChange}
//         />
//     </div>

//     <button 
//       // className="form-button reg-btn" 
//       // type="submit"
//       // onClick={this.handleRegistration}
//     > 
//       register 
//     </button>
//       {/* <Link className="reg-item" to="/register">register</Link> */}

//   </form>

//  )
//  }