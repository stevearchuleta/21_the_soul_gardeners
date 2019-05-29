import React, { Component }from 'react';
import './style.css';
import Carousel from './carousel/Carousel';
import toDoForm from './toDoForm';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';




class DailyJournal extends Component{
  render(){
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 
    <div className="item journal">
      <div>DAILY JOURNAL</div>
      <Carousel />
    </div>
     // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
  )
}
}

export default DailyJournal