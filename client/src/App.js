import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./cherry-blossom-1295009_960_720.png";
import "./App.css";
import Home from "./pages/home";
// import Register from './pages/register';
// import Login from './pages/login';
import { UserContext, UserProvider } from "./utilities/userContext";
import { ErrorProvider } from "./utilities/errorContext";
import GameOne from "./pages/gameOne";
import GameTwo from "./pages/gameTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        THE SOUL GARDENERS
     
      </header>

      <UserProvider>
        <ErrorProvider>
          <Router>
            <div>

              <Route exact path="/" component={Home} />
              <Route exact path="/game-one" component={GameOne} />
              <Route exact path="/game-two" component={GameTwo} />

              {/* <pre> */}
              {/* JSON.stringify(this.state, null, 2) */}
            </div>
          </Router>
        </ErrorProvider>
      </UserProvider>
    </div>
  );
}

export default App;
