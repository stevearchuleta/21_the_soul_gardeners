import React, { Component } from "react";
import "./Slide.css";
import TodoForm from "../toDoForm/TodoForm";

class Slide extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="slide">
        <TodoForm />
      </div>
    );
  }
}

export default Slide;
