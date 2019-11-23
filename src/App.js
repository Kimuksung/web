//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react'
import Images_change from './pages/Images'

import Loginform from './pages/Loginform';
//import Home from './pages/Home';
//import Banner from './pages/Banner';
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
        <Route exact path="/" component={Images_change} />
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

/*
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selected_content_id:2,
      content:[
        {id:1, img:'./images/space1.jpg'},
        {id:2, img:'./images/space2.jpg'},
        {id:3, img:'./images/space3.jpg'},
      ]
    }
  }
  render(){
    var i=0;
    var _img='';

    while(i<=this.state.content.length){
      var data=this.state.content[i];
      if(data.id===this.state.selected_content_id){
        _img = data.img;
        break;
      }
      i=i+1;
    }
    console.log(_img);
    return(
      <div>
        <h1> {_img} </h1>
        <Images_change data={this.state.selected_content_id}></Images_change>
      </div>
    );
  }
}*/

/*
class App extends Component{
  render(){
    return(
      <Images_change></Images_change>
    );
  }
}
*/
export default App;
