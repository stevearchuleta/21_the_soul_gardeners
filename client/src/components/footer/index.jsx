import React, { Component } from 'react';
import './style.css';
// import { Redirect } from 'react-router-dom';


class Footer extends Component {
  
  state = {
    region: ''
  }
  
  regionChange = (event) => {
    this.setState({
      region : event.target.value
    })
    this.props.changeRegion(event.target.value);
  }

  render(){
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? (

    <div className="item footer">

    <div className="item footer">
      <div>RAINFALL and EVAPOTRANSPIRATION</div>
    </div>

      
    <p>
    Evapotranspiration (ET) is the sum of evaporation and plant transpiration from the Earth’s land and ocean surface to the atmosphere. We auto-adjust your irrigation schedule based in part on ET, water depletion amounts, plant types, soil composition, rainfall, and forecasts, and water only the amount needed.
    </p>
    <div className="form-item region">
            <input 
               type="text"
               className="form-input"
               name="region"
               placeholder="city/region"
              //  value={region}
              //  onChange={this.regionChange}
              /> 
          </div>

          <button 
            className="btn" 
            type="submit"
            // onClick={() => this.regionChange(region)}
          > 
          Submit 
          </button>
    </div> 
  
 

     // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
  )
}
}

export default Footer