import React from 'react';
import './style.css';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';

const header = () => {
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 

    <div className="item header">
      <div>
        <h1 className='header-text-1'>Gardening The Soul...
        </h1>
        <h1 className='header-text-2'>As Well As The Soil
        </h1>
       
        <div>
          <h1 className="reg-message log-message welcome-message">
            {/* I WANT THIS TO BE PLACED IN THE HEADER SECTION */}
            {/*  {user ? (   */}
            {/* <div>Welcome, {user.username}</div> */}
            {/*   ) :   (     */}
          </h1>
        </div>
     
      </div>
    </div>

     // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
  )
}


export default header
