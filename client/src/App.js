import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './cherry-blossom-1295009_960_720.png';
import './App.css';
import Home from './pages/home';
import GameOne from './pages/gameOne';
import GameTwo from './pages/gameTwo';



class App extends Component {
  fetchData = () => {
    axios("/api/trefle").then(res => {
console.log(res.data);
    })
  }
  render(){
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.fetchData}>
         THE SOUL GARDENERS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </header>
      {/* <button onClick={this.fetchData}>fetch data</button> */}
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/game-one" component={GameOne} />
      <Route exact path="/game-two" component={GameTwo} />
      </div>
    </Router>
  
  
    </div>
  );
}
}

export default App;
