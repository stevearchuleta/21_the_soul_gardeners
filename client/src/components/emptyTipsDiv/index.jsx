import React, {Component} from 'react';
import './style.css';
import axios from 'axios';



class emptyTipsDiv extends Component{

  render(){
  return(
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
        </div>
      }
    
    </div>
  )
}}


export default emptyTipsDiv