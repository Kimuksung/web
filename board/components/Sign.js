import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './sign.css';
import axios from 'axios';

class Sign extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      pw:'',
      email:'',
      isIdValid: false,
      isEmailValid:false,
      isPwValid:false,
      test:"secondary"
    };
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleIdChange = this.handleIdChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }
  
  handleEmailChange(e){
    console.log(e.target.value);
    this.setState({email:e.target.value})
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    if (e.target.value.match(emailRegExp)) {
      console.log("email-validate");
      this.setState({
        isEmailValid: true,
      });
    }else {
      console.log("email-notvalidate");
      this.setState({
        isEmailValid: false,
      });
    }
  }
  handlePasswordChange(e){
    console.log(e.target.value);
    this.setState({pw:e.target.value})
    if(e.target.value.length>=6){
      console.log('Pwtrue');
      this.setState({
        isPwValid:true
      })
    }else{
      console.log('Pwfalse');
      this.setState({
        isPwValid:false
      })
    }
  }
  handleIdChange(e){
    console.log(e.target.value);
    this.setState({
      id:e.target.value
    })
    if(e.target.value.length>2){
      console.log('true');
      this.setState({
        isIdValid:true
      })
    }else{
      console.log('false');
      this.setState({
        isIdValid:false
      })
    }
  }
  onSubmit(e){
    e.preventDefault();
    const users = {
      id: this.state.id,
      pw: this.state.pw,
      email: this.state.email
    }
    console.log(users);

    axios.post('http://localhost:5000/users/add', users)
      .then(res => console.log(res.data))
    .catch((error)=>{
      console.log("error"+error);
      alert(error);
    });
    window.location = '/login';
  }
  
  isIdValid = () => {
    const isIdValid = this.state.isIdValid;
    console.log("isIdValid"+isIdValid);
    return isIdValid;
  };

  inputClassNameHelper = boolean => {
    switch (boolean) {
      case true:
        return 'primary';
      case false:
        return 'secondary';
      default:
        return '';
    }
  };

  render(){
    return(
      <div className="border_body">
            <div className="border_main"><br/>
                <div className="tbox_br">
                    <TextField onChange={this.handleIdChange} InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>
          ),
        }} id="id" label="id"  className="tbox" variant="outlined"/>
                </div>
                <div className="tbox_br">
                    <TextField onChange={this.handleEmailChange} InputProps={{startAdornment: (<InputAdornment position="start"><EmailIcon /></InputAdornment>
          ),
        }} id="email" label="이메일"  className="tbox" variant="outlined"/>
                </div>
                <div className="tbox_br">
                    <TextField onChange={this.handlePasswordChange} InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>
          ),
        }} id="password" label="Password(6글자 이상)" className="tbox" type="password" autoComplete="current-password" variant="outlined"/>
                </div>
                <div className="tbox_br">
                    <TextField InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>
          ),
        }} id="check_password" label="Password(6글자 이상)" className="tbox" type="password" autoComplete="current-password" variant="outlined"/>
                </div>
            <br/>
            <div className="loginbox_margin">
                <input type="button" onClick={this.onSubmit}  className="membership_button" value="회원가입" ></input>
            </div>
            </div>
        </div>
    );
  }
}

export default Sign;
