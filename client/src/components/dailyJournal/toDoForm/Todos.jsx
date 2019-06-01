import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  markComplete = () => {
    console.log('Hello')
  }

  render(){
    // console.log(this.props.todos)
  return this.props.todos.map((todo) => (
    // 1. what do I want to display in the browser after mapping through the todos array?
    // 2. I want to display the "tasks" and "isCompleted".
    <TodoItem key={todo.id} todo={ todo } markComplete={this.props.markComplete} deleteTodo = { this.props.deleteTodo}/>
  ));
  
}
}

// PropTypes
Todos.propTypes = {

    todo: PropTypes.array.isRequired
}

export default Todos;