import React, { Component } from 'react';
import './boardview.css';
import axios from 'axios';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

class BoardView extends Component{
    componentDidMount() {
        var no = new URL(window.location.href).pathname.split('/')[2];
        const url = 'http://localhost:5000/boards/dataselect/'+no
        console.log(url);
        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({data:res.data});
                const el = document.getElementById('map');
                let daumMap = new window.daum.maps.Map(el, {
                center: new window.daum.maps.LatLng(37.537187, 127.005476),
                level:3
                });
                var geocoder = new window.daum.maps.services.Geocoder();
                console.log(this.state.data.address.split('/')[0]);
                geocoder.addressSearch(this.state.data.address.split('/')[0],function(result,status){
                if(status===window.daum.maps.services.Status.OK){
                    var coords = new window.daum.maps.LatLng(result[0].y,result[0].x);
                    var marker = new window.daum.maps.Marker({
                        map:daumMap,
                        position:coords
                    });
                    daumMap.setCenter(coords);
                }
            });
        });
        
    }
    constructor(props){
        super(props);
        this.state={
          data:{}
          
        }
        this.submit=this.submit.bind(this);
    }
    submit(e){
        var no = new URL(window.location.href).pathname.split('/')[2];
        const url = 'http://localhost:5000/boards/delete/'+no
        console.log(url);

        axios.delete(url,{headers: {
            'Access-Control-Allow-Origin': '*',
          }})
        .then(res=>{
            console.log(res);
            alert('게시판을 삭제하였습니다.');
            window.location='/';
        }).catch(err=>{
            alert('게시판 삭제에 실패하였습니다.');
            window.location='/board/'+no+"/view";
        })
    }
    render(){
        let category1 = this.state.data.category1?"회의실":""
        let category2 = this.state.data.category2?"파티룸":""
        let category3 = this.state.data.category3?"카페":""
        let category4 = this.state.data.category4?"엠티장소":""
        const btn ={backgroundColor: '#28282a',color:'#FFFFFF',borderColor:'#28282a'};
        return(
            <div>
            <header id="header">
            <a href="/" className="logo"><strong>게시판</strong> (누르면 메인화면)</a>
            </header>
            <div style={{marginLeft:"25%",marginRight:"25%"}}>
                <h1 style={{float:"left",width:"100%"}}>{this.state.data.subject}</h1>
                <hr style={{width:"200px",color:"yellow",border:"solid",float:"left",marginTop:"-20px"}}></hr>
                
                <img src={"//localhost:5000/"+this.state.data.imageData} style={{float:"left",width:"100%",marginTop:"20px"}}/>
                <h5 style={{float:"left",width:"100%"}}> 공간 소개 </h5>
                <hr style={{width:"80px",color:"yellow",border:"solid",float:"left",marginTop:"-20px"}}></hr>
                <div><p style={{float:"left",width:"100%"}}> {this.state.data.content} </p></div>
                <h5 style={{float:"left",width:"100%"}}> category </h5>
                <hr style={{width:"80px",color:"yellow",border:"solid",float:"left",marginTop:"-20px"}}></hr>
                <h3 style={{float:"left",width:"100%",textAlign:"left"}}> {category1} {category2} {category3} {category4}</h3>
                <h5 style={{float:"left",width:"100%"}}> 위치 </h5>
                <hr style={{width:"80px",color:"yellow",border:"solid",float:"left",marginTop:"-20px"}}></hr>
                <h5 style={{float:"left",width:"100%"}}> {this.state.data.address} </h5>
                <div id="map" style={{width:"100%",height:"500px",marginTop:"10px"}}></div>
                <br/>
                <Button  style={btn} onClick={this.submit}> 삭제 </Button>
            </div>
            </div>
        );
    }
}

export default BoardView;