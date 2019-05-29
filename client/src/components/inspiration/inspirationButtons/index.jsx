import React from 'react';
import './style.css';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';

const buttonLinks = (props) => {
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 

    <li>
    <a href={props.link.href}>{props.link.title}</a>
  </li>

  // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
  )
}

export default buttonLinks