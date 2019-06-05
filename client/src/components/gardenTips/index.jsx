import React, { Component }from 'react';
import './style.css';
import TipLinks from './tipLinks';
import HarvestHelper from './harvestHelper';
// import UserContext from '../utilities/UserContext';
// import { Redirect } from 'react-router-dom';

// upload this array to my remote MongoDB Atlas database
 const linkList = [
  {
    category: "Annuals",
    href: "/annuals"
  },
  {
    category: "Beneficial Organisms",
    href: "/beneficialOrganisms"
  },
  {
    category: "Fruit Trees",
    href: "/fruitTrees"
  },
  {
    category: "Grasses",
    href: "/grasses"
  },
  {
    category: "Ground Cover",
    href: "/groundCover"
  },
  {
    category: "Herbs",
    href: "/herbs"
  },
  {
    category: "Mosses",
    href: "/mosses"
  },
  {
    category: "Perennials",
    href: "/perennials"
  },
  {
    category: "Plant Diseases",
    href: "/plantDiseases"
  },
  {
    category: "Plant Pests",
    href: "/plantPests"
  },
  {
    category: "Shade Plants",
    href: "/shadePlants"
  },
  {
    category: "Shrubs",
    href: "/shrubs"
  },
  {
    category: "Succulents",
    href: "/succulets"
  },
  {
    category: "Trees",
    href: "/trees"
  },
  {
    category: "Tropical Plants",
    href: "/tropicalPlants"
  },
  {
    category: "Vegetable Plants",
    href: "/vegetablePlants"
  },
  {
    category: "Vines",
    href: "/vines"
  },
  {
    category: "Weeds",
    href: "weeds"
  },
]


class gardenTips extends Component{

  state = {
    id : null,
    category : null,
    image: null
  }
  
  nameChange = (event) => {
    this.setState({
      id : event.target.value
    })
    this.props.changePlant(event.target.value);
  }


  render(){
    return(
     // <UserContext.Consumer>
    // {({user})} => (
    // user ? ( 

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
            <button className="btn garden-tips-button" onClick={() => this.props.getCategory(i.category)}>
              {i.category}
            </button>
            )
          }
          </ul>
        
      </div>

       // ) : <div>Please Login</div>)
    //   )}
    // </UserContext.Consumer>
    )
  }
}


export default gardenTips
