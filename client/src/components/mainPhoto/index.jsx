import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';

class MainPhoto extends Component {
  render(){
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 
      // <div className="card item empty-tips">
    <div className="item photo"> 
      <div>FLOWER PHOTO</div>
      {this.props.plant &&
      <div className="plant-photo">
                {this.props.plant.name}
        <img src="">
        {this.props.plant.image_url}
        </img>
      </div>
      }
    </div>



    //  {/* // ) : <div>Please Login</div>)
    // //   )}
    // // </UserContext.Consumer> */}
      
    //   </div>
    )  
  }
}


export default MainPhoto