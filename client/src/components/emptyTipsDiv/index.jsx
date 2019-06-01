import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';



class emptyTipsDiv extends Component{

  render(){
   console.log(this.props.category);
  return(
    // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 
    <div className="card item empty-tips">
        
      <div className="card-header">
        <div>PLANT &nbsp;&nbsp;INFORMATION</div>
      </div>
      
      {this.props.plant && 
        <div className="plant-tips">
          <h4>{this.props.plant.name}</h4>
          <p><b>Description:&nbsp;</b>{this.props.plant.description}</p>
          <p><b>Sun:&nbsp;</b>{this.props.plant.optimal_sun}</p>
          <p><b>Soil:&nbsp;</b>{this.props.plant.optimal_soil}</p>
          <p><b>Planting Considerations:&nbsp;</b>{this.props.plant.planting_considerations}</p>
          <p><b>When to Plant:&nbsp;</b>{this.props.plant.when_to_plant}</p>
          <p><b>Growing From Seed:&nbsp;</b>{this.props.plant.growing_from_seed}</p>
          <p><b>Transplanting:&nbsp;</b>{this.props.plant.transplanting}</p>
          <p><b>Spacing:&nbsp;</b>{this.props.plant.spacing}</p>
          <p><b>Watering:&nbsp;</b>{this.props.plant.watering}</p>
          <p><b>Feeding:&nbsp;</b>{this.props.plant.feeding}</p>
          <p><b>Other Care:&nbsp;</b>{this.props.plant.other_care}</p>
          <p><b>Diseases:&nbsp;</b>{this.props.plant.diseases}</p>
          <p><b>Pests:&nbsp;</b>{this.props.plant.pests}</p>
          <p><b>Harvesting:&nbsp;</b>{this.props.plant.harvesting}</p>
          <p><b>Storage Use:&nbsp;</b>{this.props.plant.storage_use}</p>
          {/* <img src=""> {this.props.plant.image_url} </img> */}
        </div>
      }
      
      {this.props.category &&
        this.props.category.map(category => {
          return(
            <div key={category.title}>
            <h4>{ category.title }</h4>
            <p>{ category.paragraph }</p>
          </div>
          )
        })

      }
      

    </div>
     // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
  )
}}


export default emptyTipsDiv