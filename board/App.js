import React, { Component } from 'react';
import './App.css';
import Loginmodal from './components/Loginmodal';
import Images_change from './components/Images';
import Subject from './components/Subject';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from 'axios';

class App extends Component{
  componentDidMount() {
    axios.get("http://localhost:5000/boards/list")
    .then(res=>{
      //console.log(res.data);
      this.setState({data:res.data});
      this.setState({data1:this.state.data[0]})
      this.setState({data2:this.state.data[1]})
      this.setState({data3:this.state.data[2]})  
    });
    
  }

  constructor(props){
    super(props);
    this.state={
      data:[],
      data1:Object,
      data2:Object,
      data3:Object,
    }
  }

  render(){
    return(
      <div>
        <Subject></Subject>

      <Images_change/>
      <h1 style={{textAlign:"center"}}>공간 목록</h1>
        <div id="temp" style={{width:"100%",height:"500px",margin:"0 auto",paddingLeft:"5%",paddingRight:"5%"}}>
          
          <div style={{width:"30%",height:"500px",display:"inline-block",backgroundColor:"#D5D6D7"}}>
          <a href={"/board/"+this.state.data1.no+"/view"}>
          <img src={"//localhost:5000/"+this.state.data1.imageData} style={{width:"100%",height:"70%"}}/>
          <p style={{width:"100%",height:"5%",float:"left",paddingLeft:"5%",fontSize:"30px"}}><strong>{this.state.data1.subject}</strong></p>
          <p style={{fontSize:"20px",paddingLeft:"5%",textDecoration:"none"}}><LocationOnIcon> </LocationOnIcon>{this.state.data1.address}</p>
          </a>
          <div>

            </div>
            </div>
            <div style={{width:"30%",height:"500px",display:"inline-block",margin:"1%",backgroundColor:"#D5D6D7"}}>
            <a href={"/board/"+this.state.data2.no+"/view"}>
            <img src={"//localhost:5000/"+this.state.data2.imageData} style={{width:"100%",height:"70%"}}/>
            <p style={{width:"100%",height:"5%",float:"left",paddingLeft:"3%",fontSize:"30px"}}><strong>{this.state.data2.subject}</strong></p>
          <p style={{fontSize:"20px",paddingLeft:"5%",textDecoration:"none"}}><LocationOnIcon> </LocationOnIcon>{this.state.data2.address}</p>
          </a>
            </div>
            <div style={{width:"30%",height:"500px",display:"inline-block",backgroundColor:"#D5D6D7"}}>
            <a href={"/board/"+this.state.data3.no+"/view"}>
            <img src={"//localhost:5000/"+this.state.data3.imageData} style={{width:"100%",height:"70%"}}/>
            <p style={{width:"100%",height:"5%",float:"left",paddingLeft:"3%",fontSize:"30px"}}><strong>{this.state.data3.subject}</strong></p>
          <p style={{fontSize:"20px",paddingLeft:"5%",textDecoration:"none"}}><LocationOnIcon> </LocationOnIcon>{this.state.data3.address}</p>
          </a>
            </div>
          </div>
          <br/>
          <br/>
          <h1 style={{textAlign:"center"}}>공간 게시판</h1>
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
          <footer style={{backgroundColor:"#D5D6D7",width:"100%"}}> <p style={{float:"center"}}> @Design by uk </p></footer>
      </div>
    );
  }
}


export default App;
