import React, {Component} from 'react';
import './style.css';
import axios from 'axios';



class emptyTipsDiv extends Component{

  state = {
    vegetables: []
  }

  componentDidMount(){
    axios.get("/api/harvestHelper")
    .then((res) => {
    console.log(res.data)
    for (let i =0; i < res.data.length; i++){
      console.log(res.data[i].name);
      console.log(res.data[i].description);
      console.log(res.data[i].optimal_sun);
      console.log(res.data[i].optimal_soil);
      console.log(res.data[i].when_to_plant);
      console.log(res.data[i].growing_from_seed);
      console.log(res.data[i].transplanting);
      console.log(res.data[i].spacing);
      console.log(res.data[i].planting_considerations);
      console.log(res.data[i].watering);
      console.log(res.data[i].feeding);
      console.log(res.data[i].other_care);
      console.log(res.data[i].diseases);
      console.log(res.data[i].pests);
      console.log(res.data[i].harvesting);
      console.log(res.data[i].storage_use);
      console.log(res.data[i].image_url);
    }
    this.setState({vegetables: res.data});
    })
    // res.status(200).send(d.data))
    // .catch(err => res.status(422).json(err));
  
  }
  render(){
  return(
    <div className="card item empty-tips">
    <div className="card-header">
      <div>PLANT INFO</div>
    </div>
      <h4>{this.state.vegetables[0] && this.state.vegetables[0].name}</h4>
    
    </div>
  )
}}


export default emptyTipsDiv