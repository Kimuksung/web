//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react'
import Loginform from './pages/Loginform';
import Home from './pages/Home';
import Board from './pages/Board';
import NotFound from './pages/Notfound';

class Login extends Component{
  render(){
    return(
      <div className="login">
      <Link to="/login">
        <button className="login_height">login</button>
      </Link>
      <Link to="/board">
        <button className="login_height">board</button>
      </Link>
      </div>
    );
  }
}

class Subject extends Component {
  render(){
    return (
    <header className="header_title">
      <h1>
        <a href="www.google.com" className="logo">
          <i>space share</i>
        </a>
      </h1>
      <Login></Login>        
    </header>
    );
  }
}

class Foot extends Component{
  render(){
    return(
      <div className="bottom_intro">
        디자인 소개
        @by uksung
      </div>

    );
  }
}

class App extends Component {
  render (){
    return (
      <Router>
        <Subject></Subject>
      <hr />
      <main>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Loginform} />
        <Route path="/Board" component={Board} />
        <Route component={NotFound} />
        </Switch>
      </main>
      
      <footer>
      <Foot></Foot>
      </footer>
      </Router>
    );
  }
    
}

export default App;
