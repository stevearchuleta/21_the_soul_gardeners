import React from 'react';
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
    name: "House Plants",
    href: "/housePlants"
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

const gardenTips = () => {
  return(
    <div className="item garden-tips">
      <div>GARDEN TIPS</div>
      <ul>
        {linkList.map(i => <TipLinks link={i} />)}
      </ul>
    </div>
  )
}


export default gardenTips
