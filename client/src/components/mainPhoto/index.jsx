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
      
    <div className="item photo"> 
      <div>FLOWER PHOTO</div>
      {this.props.plant &&
      <div className="plant-photo">
                <div>{this.props.plant.name}</div>
        <img src={`https://res-4.cloudinary.com/do6bw42am/image/upload/c_scale,f_auto,h_300/v1/${this.props.plant.image_url}`}/>
        </div>
      }
      </div>
    )  
  }
}


export default MainPhoto