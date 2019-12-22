import React, { Component } from 'react';
import { Toolbar,Grid,TextField,Typography  } from '@material-ui/core';
import Loginmodal from './Loginmodal';
import SearchIcon from '@material-ui/icons/Search';
import '../App.css';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

class Subject extends Component {
    render(){
      const btn ={backgroundColor: '#28282a',color:'#FFFFFF',borderColor:'#28282a'};
      return (
      <header className="header_title">
        <Toolbar style={{backgroundColor:'#28282a'}}> <Typography variant="h6" style={{color:'#fff'}}><i>Uk'sCloud </i></Typography>
           <Grid container spacing={1} alignItems="flex-end" style={{color:'#fff' ,marginLeft:'125px'}}>                
                  <Grid item style={{color:'#fff'}}>
                  <TextField id="input-with-icon-grid" label="검색" underline={{style:{color:'#fff'}}} InputLabelProps={{style:{color:'#fff'
                }}} InputProps={ {style: {color:'#fff' } } } />
                  </Grid>
              <Grid item>
                    <SearchIcon />
                  </Grid>
             </Grid>

             <a href="/board" style={{marginRight:"20px"}}>               
        
        <Button bsStyle="" style={btn} bsClass="btn" bsSize="large"> 공간등록 </Button>
        </a>
             <Loginmodal></Loginmodal>   
           </Toolbar>     
      </header>
      );
    }
  }

  export default Subject;
