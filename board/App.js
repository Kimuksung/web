import React, { Component } from 'react';
import './App.css';
import Loginmodal from './components/Loginmodal'
import Images_change from './components/Images';
import axios from 'axios';

class App extends Component{
  componentDidMount() {
    axios.get("http://localhost:5000/boards/list")
    .then(res=>{
      console.log(typeof res.data[0]);
      this.setState({data:res.data});
    });
  }

  constructor(props){
    super(props);
    this.state={
      data:[],
    }
  }

  render(){
    return(
      <div>
      <a href="/board">
        <input type="button" value="board 게시판"></input>
      </a>
      <Images_change/>

          <div style={{float:"center",margin:"50px"}}>
            <table id='students'>
              <tbody>
                <tr> 
                  <th>no</th>
                  <th>제목</th>
                  <th>위치</th>
                </tr>            
          {
            this.state.data.map((item)=>{
              return <tr key={item.no}> <td>{item.no}</td> <td><a href={"/board/"+item.no+"/view"}>{item.subject}</a></td> <td>{item.address}</td> </tr> 
            })
          }
          </tbody>   
          </table>
          </div>

      </div>
    );
  }
}


export default App;
