import React from 'react';
import './style.css';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';

const tipLinks = (props) => {
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 

    <li>
      <a href={props.link.href}>{props.link.name}</a>
    </li>

    // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
  )
}


export default tipLinks
