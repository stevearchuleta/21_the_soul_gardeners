import React from 'react';
import './style.css';


const buttonLinks = (props) => {
  return(
    <li>
    <a href={props.link.href}>{props.link.title}</a>
  </li>
  )
}

export default buttonLinks