import React, { Component } from 'react'

export class addTodo extends Component {

  state = {
    title: ''
  }

  onChange = (event) => this.setState({ [event.target.name]: event.target.value});

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit } style={{ display: 'flex', padding: '10px' }}>
          <input 
            type="text" 
            name="title"
            style={{ flex: '10', padding: '5px'}}
            placeholder="Type Your Garden Task | Click Submit"
            value={this.state.title}
            onChange= {this.onChange}
          />
          <input
            type="submit"
            value="submit"
            class="btn"
            style={{ flex: '1' }}
          />
        </form>
      </div>
    )
  }
}

export default addTodo

