import React, { Component } from 'react';

class LoginSuccess extends Component{
    componentDidMount() {
    console.log(new URL(window.location.href).pathname.split('/')[2]);
    this.setState({id: new URL(window.location.href).pathname.split('/')[2]});
    }
    constructor(props){
        super(props);
        this.state={
          id:'',
        };
    }
    render(){
        console.log(this.state.id);
        return(
            <div> <h1>{this.state.id} 님 안녕하세요 </h1>
            <a href="/"style={{textDecoration:"none"}}>Home</a>
            </div>
        );
    }
}

export default LoginSuccess;