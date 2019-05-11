import React, { Component }from 'react';
import axios from 'axios';
import './style.css';
import TipLinks from './tipLinks';

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
    name : ''
  }
  
  fetchData = (event) => {
    event.preventDefault();
    axios("/api/trefle/" + this.state.name).then(res => { console.log(res.data);
    })
  }

  nameChange = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  render(){
    return(
      <div className="item garden-tips">
        <div className="card">
          <div className="card-header">
          GARDEN TIPS
          </div>
        <form>
          Enter Plant Name: <input type="text" value={this.state.name} onChange={this.nameChange}></input>
          <input type="submit" value="Submit" onClick={this.fetchData}></input>
        </form>
        <ul>
          
          {linkList.map(i => 
          <button className="btn garden-tips-button"><TipLinks link={i}/>
          </button>)}
          
        </ul>
      </div>
      </div>
    )
        }
}


export default gardenTips
