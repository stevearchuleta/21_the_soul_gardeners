import React, { Component } from "react";
import "./style.css";
import { UserContext } from "../../../utilities/userContext";
import { ErrorContext } from "../../../utilities/errorContext";
import API from "../../../utilities/API";

class login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      error: null
    });
  };

  handleLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;

    API.login({ email, password })
      .then(res => {
        alert("You have successfully logged in");
        this.props.updateUser(res.data);
      })
      .catch(err => {
        this.setState(err);
        this.props.updateError([{ msg: "Invalid Login Information" }]);
      });
  };

  render() {
    return (
      <UserContext>
        {({ user }) => (
          <form className="form reg-form">
            <div className="form-item email">
              <input
                type="email:"
                className="form-input"
                name="email"
                placeholder="Email:"
                aria-label="email"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-item password">
              <input
                type="text"
                type="password"
                className="form-input"
                name="password"
                placeholder="Password:"
                aria-label="Name"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <button
              className="form-button log-btn"
              type="submit"
              onClick={this.handleLogin}
            >
              login
            </button>
          </form>
        )}
      </UserContext>
    );
  }
}

export default login;
