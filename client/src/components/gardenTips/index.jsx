import React, { Component }from 'react';
import axios from 'axios';
import './style.css';
import TipLinks from './tipLinks';
import HarvestHelper from './harvestHelper';

// upload this array to my remote MongoDB Atlas database
 const linkList = [
  {
    name: "Annuals",
    href: "/annuals"
  },
  {
    name: "Beneficial Organisms",
    href: "/beneficialOrganisms"
  },
  {
    name: "Fruit Trees",
    href: "/fruitTrees"
  },
  {
    name: "Grasses",
    href: "/grasses"
  },
  {
    name: "Ground Cover",
    href: "/groundCover"
  },
  {
    name: "Herbs",
    href: "/herbs"
  },
  {
    name: "Mosses",
    href: "/mosses"
  },
  {
    name: "Perennials",
    href: "/perennials"
  },
  {
    name: "Plant Diseases",
    href: "/plantDiseases"
  },
  {
    name: "Plant Pests",
    href: "/plantPests"
  },
  {
    name: "Shade Plants",
    href: "/shadePlants"
  },
  {
    name: "Shrubs",
    href: "/shrubs"
  },
  {
    name: "Succulents",
    href: "/succulets"
  },
  {
    name: "Trees",
    href: "/trees"
  },
  {
    name: "Tropical Plants",
    href: "/tropicalPlants"
  },
  {
    name: "Vegetable Plants",
    href: "/vegetablePlants"
  },
  {
    name: "Vines",
    href: "/vines"
  },
  {
    name: "Weeds",
    href: "weeds"
  },
]

class gardenTips extends Component{

  state = {
    name : '',
    plants: []
  }
  
  nameChange = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  componentDidMount(){
      axios.get("/api/harvestHelper")
      .then((res) => {
      //console.log(res.data);
      const names = res.data.map(datum => datum.name).sort()
      console.log(names);
      this.setState({ plants: names })
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="card item garden-tips">
        
          <div className="card-header">
          PLANT &nbsp;&nbsp;INFORMATION
          </div>
          
          <br />

            <div class="dropdown">
            <select>
              {this.state.plants.map(plant => (
                <option value={plant}>{plant}</option>
              ))}
            </select>
            </div>
  
          <ul>
          {linkList.map(i =>
            <button className="btn garden-tips-button">
              <TipLinks link={i}/>
            </button>
            )
          }
          </ul>
        
      </div>
      
    )
  }
}


export default gardenTips
