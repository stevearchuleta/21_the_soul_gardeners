import React, { Component } from 'react';

const UserContext = React.createContext();

export class UserProvider extends React.Component {
  state = { 
   currentUser: null } 

  onLogIn = (user) => { 
    this.setState({ currentUser: user
    });
  }

  render(){
    return(
       <UserContext.Provider value={{
          user: this.state.currentUser, 
          onLogin: this.onLogin
          
          }} 
      >
        {this.props.children}
        </UserContext.Provider>

    )
  }

}

export default UserContext