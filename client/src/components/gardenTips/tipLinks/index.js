import React from 'react';
import './style.css';


const tipLinks = (props) => {
  return(
    <li>
      <a href={props.link.href}>{props.link.name}</a>
    </li>
  )
}


export default tipLinks
