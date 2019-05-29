import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './cherry-blossom-1295009_960_720.png';
import './App.css';
import Home from './pages/home';
// import Register from './pages/register';
// import Login from './pages/login';
// import { UserProvider } from './utilities/UserContext';
import GameOne from './pages/gameOne';
import GameTwo from './pages/gameTwo';



function App() {
  return (
    <div className="App">
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* <p onClick={this.fetchData}> */}
          THE SOUL GARDENERS
          {/* </p> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a> */}
      </header>
      
      
      {/* <UserProvider> */}
      <Router>
        <div>

          {/* In Sung's example, he used Nav... which is what I call Login. After introducing UserContext.Provider to this App.js file, Sung deleted the following user={this.state.currentUser from his Nav, my Login} */}
          {/* Login user={this.state.currentUser} */}

        <Route exact path="/" component={Home} />
        {/* <Route exact path="/register" component={Register} /> */}
        {/* <Route exact path="/login" 
              component{LogIn} */}
        <Route exact path="/game-one" component={GameOne} />
        <Route exact path="/game-two" component={GameTwo} />

        {/* <pre> */}
        {/* JSON.stringify(this.state, null, 2) */}

        </div>
      </Router>

      {/* </UserProvider/> */}

    </div>

  );
 }

export default App;
