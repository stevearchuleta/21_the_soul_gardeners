import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  
  // Styling: for the rendering of todo tasks.
  getStyle = () => {
    // EXAMPLE OF AN IF/ELSE CONDITIONAL INSIDE THE FUNCTION
    // if(this.props.todo.isCompleted){
    //   return{
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
    return {
      // EXAMPLE OF a ternary operator to "line-through" if task "isCompleted" === true
      
      backgroundColor: 'darkOliveGreen',
      opacity: '80%',
      padding: '5px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

  render() {

    const { id, title } = this.props.todo

    return (
      <div style={this.getStyle()}>
        <p> 
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        { title } 
        <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {

  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff6961',
  color: '#fff',
  border: 'none',
  padding: '2px 3px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
