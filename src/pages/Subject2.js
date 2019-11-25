import React, { Component } from 'react'
import { Toolbar,Button,ButtonGroup,Grid,TextField,Typography,AppBar  } from '@material-ui/core';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

class Subject2 extends Component{
    render(){
        return(
            <div >
                <AppBar position="static" >
                <Toolbar background-color="black"> <Typography variant="h6"><i>SpaceCloud </i></Typography>
                <Grid container spacing={1} alignItems="flex-end">                
                <Grid item>
                  <TextField id="input-with-icon-grid" label="검색" />
                </Grid>
                <Grid item>
                  <SearchIcon />
                </Grid>
                </Grid>
         <ButtonGroup>
         <Link to="/login">
         <Button>login</Button>
         </Link>
         <Link to="/board">
         <Button color="inherit">board</Button>
         </Link>
         </ButtonGroup>
         </Toolbar>
         </AppBar>
       </div>

        );
    }
}

export default Subject2;