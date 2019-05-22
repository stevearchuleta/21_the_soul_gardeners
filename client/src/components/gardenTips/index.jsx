import React, { Component }from 'react';
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
    id : null,
    category : null
  }
  
  nameChange = (event) => {
    this.setState({
      id : event.target.value
    })
    this.props.changePlant(event.target.value);
  }

handleButtonClick = (name) => {
  this.setState({
    category : name
  })
}

  render(){
    return(
      <div className="card item garden-tips">
        
          <div className="card-header">
          PLANT &nbsp;&nbsp;CATEGORIES
          </div>
          
          <br />

            <div class="dropdown">
            <select onChange={this.nameChange}>
              <option value={null}>Select a Vegatable...</option>
              {this.props.plants.map((plant, i) => (
                <option value={i}>{plant.name}</option>
              ))}
            </select>
            </div>
  
          <ul>
          {linkList.map(i =>
            <button className="btn garden-tips-button" onClick={() => this.handleButtonClick(i.name)}>
              {i.name}
            </button>
            )
          }
          </ul>
        
      </div>
      
    )
  }
}


export default gardenTips
