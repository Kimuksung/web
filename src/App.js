//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react'
import Images_change from './pages/Images'
import { Toolbar,Button,ButtonGroup,Grid,TextField,Typography  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Loginform from './pages/Loginform';
import Board from './pages/Board';
import NotFound from './pages/Notfound';


class Login extends Component{
  render(){
    return(
      <div className="login">
        <ButtonGroup>
      <Link to="/board">
      <Button variant="outlined" color='inherit' style={{color:'#fff', marginRight:'15px'}}>Board</Button>
      </Link>
      
      <Link to="/login">
      <Button variant="outlined" color='inherit' style={{color:'#fff'}}>Login</Button>
      </Link>
      </ButtonGroup>
      </div>
    );
  }
}

class Subject extends Component {
  render(){
    return (
    <header className="header_title">
      <Toolbar style={{backgroundColor:'#28282a'}}> <Typography variant="h6" style={{color:'#fff'}}><i>SpaceCloud </i></Typography>
         <Grid container spacing={1} alignItems="flex-end" style={{color:'#fff' ,marginLeft:'125px'}}>                
                <Grid item style={{color:'#fff'}}>
                <TextField id="input-with-icon-grid" label="검색" underline={{style:{color:'#fff'}}} InputLabelProps={{style:{color:'#fff'
              }}} InputProps={ {style: {color:'#fff' } } } />
                </Grid>
            <Grid item>
                  <SearchIcon />
                </Grid>
           </Grid>
           <Login></Login>   
         </Toolbar>

           
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
