import React, { Component } from 'react'
import './login.css';

import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

class Loginform extends Component{
    render(){
        return(
            <Form className="login-form">
                <h1 className="text-center"> <span className="font-weight-bold">Login </span></h1>
            <FormGroup>
                <Label className="label-form">Email</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label className="label-form">Password</Label>
                <Input type="Password" placeholder="Password"/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Log in</Button>
            <FacebookLoginButton></FacebookLoginButton>
            <div className="text-center">
                <a href="/sign-up">sign up</a>
                <span className="p-2">|</span>
                <a href="/forgot-password">Forgot password</a>
            </div>
            </Form>
        );
    }
}

export default Loginform;