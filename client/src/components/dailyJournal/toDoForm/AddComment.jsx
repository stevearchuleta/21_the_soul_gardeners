import React, { Component } from 'react'

const textAreaStyles = { flex: '10', padding: '5px', resize: 'none', height: '150px', fontFamily: 'sans-serif', fontSize: '1.2em'};

export class AddComment extends Component {

  state = {
    comments: ''
  }

  onChange = (event) => this.setState({ [event.target.name]: event.target.value});

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.comments);
    console.log(this.props.addComment);
    console.log("EVENT", this.state.comments);
    // this.setState({ comments: "" });
  }
  


  render() {
    return (
      <div>
        <form 
          onSubmit={ this.onSubmit } 
          style={{ padding: '10px' }} 
          // action={ "/html/tags/html_form_tag_action.cfm" } 
          // method={ "post" }
        >
          
          <div> 
            <textarea 
              style={textAreaStyles}
              name="comments" 
              className="comments"
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
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
        
        </form>
      </div>
    )
  }
}

export default AddComment

