import React, { Component } from 'react'
import './login.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
//import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Subject from './Subject';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          id:'',
          pw:'',
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    handlePasswordChange(e){
        console.log(e.target.value);
        this.setState({pw:e.target.value})
    }
    handleIdChange(e){
        console.log(e.target.value);
        this.setState({id:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const users = {
            id: this.state.id,
            pw: this.state.pw,
        }
        axios.post('http://localhost:5000/users/login', users)
        .then(res => {
            console.log(res.data.success);
            const url = 'http://localhost:3000/login/'+this.state.id;
            window.location = url;
        })
        .catch((error)=>{
        alert("로그인 실패하였습니다.");
        window.location = '/login';
        });
        
    }

    render(){
        return(
            <div>
                <Subject></Subject>
            <div>
            <div className="border_body">
            <div className="border_main"><br/>
                <div className="tbox_br">
                    <TextField onChange={this.handleIdChange} InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>
          ),
        }} id="id" label="id"  className="tbox" variant="outlined"/>
                </div>
                <div className="tbox_br">
                    <TextField onChange={this.handlePasswordChange} InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>
          ),
        }} id="password" label="Password(6글자 이상)" className="tbox" type="password" autoComplete="current-password" variant="outlined"/>
                </div>
                <div className="text-center" style={{textAlign:"center"}}>
                <a href="/sign" style={{textDecoration:"none"}}>sign up</a>
                <span className="p-2"> | </span>
                <a href="/forgot-password" style={{textDecoration:"none"}}>Forgot password</a>
                <FacebookLoginButton style={{width:"20%",margin:"auto"}}></FacebookLoginButton>
                <input type="button" onClick={this.onSubmit}  className="membership_button" style={{marginTop:"20px"}} value="회원가입" ></input>
                </div>
                </div>
                 
                </div>

            </div>
            </div>
            
        );
    }
}

export default Login;