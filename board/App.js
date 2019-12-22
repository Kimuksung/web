import React, { Component } from 'react';
import './App.css';
import Loginmodal from './components/Loginmodal';
import Images_change from './components/Images';
import Subject from './components/Subject';
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
        <Subject></Subject>

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
              return <tr key={item.no}> <td>{item.no}</td> <td><a style={{textDecoration:"none"}}href={"/board/"+item.no+"/view"}>{item.subject}</a></td> <td>{item.address}</td> </tr> 
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
