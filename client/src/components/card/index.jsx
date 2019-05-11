import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// export a component function named Card and then - IN LEIU OF PASSING IN PROPS - destructure the properties directly by passing each property as an argument. Set propTypes beneath this component.
export default function Card ({ 
  handleClick, 
  id, 
  type, 
  flipped,
  // solved,
  width, 
  height, 
  disabled,
 }) {
  return <div 
  className={`flip-container ${flipped ? 'flipped' : ''}`}
  style={{
    width, height
  }}
  onClick={() => disabled ? null : handleClick(id)}
  >
    <div className={'flipper'}>
      <img
      style={{
        width, height
      }}
      className={flipped ? 'front' : 'back'}
      src={flipped || solved ? `/img/${type}.png` : `/img/Mendocino-Wildflowers.jpg`} 
      />
    </div>
  </div>
}

Card.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  // solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
}

