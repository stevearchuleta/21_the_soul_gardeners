import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Home from './pages/home'

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
      <button onClick={this.fetchData}>fetch data</button>
    <Home />
    </div>
  );
}
}

export default App;
