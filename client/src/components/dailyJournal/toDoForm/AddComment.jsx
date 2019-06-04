import React, { Component } from 'react'

export class AddComment extends Component {

  state = {
    comment: ''
  }

  // onChange = (event) => this.setState({ [event.target.name]: event.target.value});

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: "" })
  }
  
  render() {
    return (
      <div>
        <form 
          onSubmit={ this.onSubmit } 
          style={{ display: 'flex' }} 
          // action={ "/html/tags/html_form_tag_action.cfm" } 
          // method={ "post" }
        >
          
          <div> 
            <textarea 
              style={{ flex: '10', padding: '5px', height: '250px'}}
              name="comments" 
              className="comments" 
              style={{ fontFamily: 'sans-serif'}} 
              style={{fontSize: '1.2em'}}
              style={{height: '250px'}}
              type="submit" 
              placeholder="Type Your Garden Notes"
              value={this.state.title}
              onChange= {this.onChange} >  
            </textarea>
          
          </div>
          
          <div>
            <input
              type="submit"
              value="submit"
              class="btn"
              style={{ flex: '1' }}
            />
          </div>
        
        </form>
      </div>
    )
  }
}

export default AddComment

