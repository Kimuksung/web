import React, { Component } from 'react';
import './board.css';
import axios from 'axios';
import Subject from './Subject';
class Board extends Component{

    componentDidMount() {
        const el = document.getElementById('map');
        let daumMap = new window.daum.maps.Map(el, {
          center: new window.daum.maps.LatLng(37.537187, 127.005476),
          level:3
        });
        var geocoder = new window.daum.maps.services.Geocoder();
        var marker = new window.daum.maps.Marker({
          position: new window.daum.maps.LatLng(37.537187, 127.005476),
          map: daumMap
      });
  
    }
    constructor(props){
      super(props);
      this.state={
        classfication1:false,
        classfication2:false,
        classfication3:false,
        classfication4:false,
        filename:"파일 선택",
        address:"",
        subject:"",
        content:"",
        concreteaddress:"",
        selectedFile:null
      }
    
    this.handleclassfication1 = this.handleclassfication1.bind(this);
    this.handleclassfication2 = this.handleclassfication2.bind(this);
    this.handleclassfication3 = this.handleclassfication3.bind(this);
    this.handleclassfication4 = this.handleclassfication4.bind(this);
    this.fileslector = this.fileslector.bind(this);
    this.sample5_execDaumPostcode = this.sample5_execDaumPostcode.bind(this);
    this.submit=this.submit.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleContentChange=this.handleContentChange.bind(this);
    this.handleConcreteaddressChange=this.handleConcreteaddressChange.bind(this);
  
    }

    handleclassfication1(){
        this.setState({classfication1:!(this.state.classfication1)});
      }
      handleclassfication2(){
        this.setState({classfication2:!(this.state.classfication2)});
      }
      handleclassfication3(){
        this.setState({classfication3:!(this.state.classfication3)});
      }
      handleclassfication4(){
        this.setState({classfication4:!(this.state.classfication4)});
      }
      fileslector(event){
        if(window.FileReader){
          this.setState({filename:event.target.files[0].name});
          this.setState({selectedFile:event.target.files[0]});
        }else{
          console.log('test2');
        }
      }
      sample5_execDaumPostcode(){
    
        const el = document.getElementById('map');
        let daumMap = new window.daum.maps.Map(el, {
          center: new window.daum.maps.LatLng(37.537187, 127.005476),
          level:3
        });
        var geocoder = new window.daum.maps.services.Geocoder();
        var marker = new window.daum.maps.Marker({
          position: new window.daum.maps.LatLng(37.537187, 127.005476),
          map: daumMap
      });
        new window.daum.Postcode({     
          oncomplete:function(data){
            var addr=data.address;
            document.getElementById("sample5_address").value=addr;
            //console.log(addr);
    
            geocoder.addressSearch(data.address,function(results,status){
              if(status===window.daum.maps.services.Status.OK){
                var result = results[0];
                var coords = new window.daum.maps.LatLng(result.y,result.x);
                el.style.display="block";
                daumMap.relayout();
                daumMap.setCenter(coords);
                marker.setPosition(coords);
              }
            })
          }
        }).open();
      }
      submit(e){    
        const formData= new FormData();
        formData.append('img',this.state.selectedFile);
        formData.append('address',this.state.address+"/"+this.state.concreteaddress);
        formData.append('category1',this.state.classfication1);
        formData.append('category2',this.state.classfication2);
        formData.append('category3',this.state.classfication3);
        formData.append('category4',this.state.classfication4);
        formData.append('subject',this.state.subject);
        formData.append('content',this.state.content);
        //console.log("form address:"+formData.get('address'))
        return axios.post("http://localhost:5000/boards/upload",formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }).then(res=>{  
          alert('게시판 등록에 성공하였습니다.');
          window.location = '/';
        }).catch(err=>{
          alert('게시판 등록에 실패하였습니다.');
          window.location = '/';
        })
      }
    
      handleSubjectChange(e){
        this.setState({
          subject:e.target.value
        })
      }
    
      handleContentChange(e){
        this.setState({
          content:e.target.value
        })
      }
      handleConcreteaddressChange(e){
        this.setState({
          concreteaddress:e.target.value,
          address:document.getElementById("sample5_address").value
        })
      }    

    render(){
        let bgColor1 = this.state.classfication1?"purple":"white"
        let bgColor2 = this.state.classfication2?"purple":"white"
        let bgColor3 = this.state.classfication3?"purple":"white"
        let bgColor4 = this.state.classfication4?"purple":"white"
        return(
            <div>
              <Subject></Subject>
            <div className="border_body">
              
            <div className="border_main">
                <div className="lineup">
                <div className="font_bold">모임장소(카테고리)<span className="font_plus">최대 4개 선택가능</span></div>
            </div>

                <div className="lineup2">
                    <input type="button" id="select_button1" onClick={this.handleclassfication1} value="회의실" style={{backgroundColor:bgColor1,border:'1px solid gray',borderCollapse:'collapse'}}></input>
                    <input type="button" id="select_button2" onClick={this.handleclassfication2} value="파티룸" style={{backgroundColor:bgColor2,border:'1px solid gray',borderCollapse:'collapse'}}></input>
                    <input type="button" id="select_button3" onClick={this.handleclassfication3} value="카페" style={{backgroundColor:bgColor3,border:'1px solid gray',borderCollapse:'collapse'}}></input>
                    <input type="button" id="select_button4" onClick={this.handleclassfication4} value="엠티장소" style={{backgroundColor:bgColor4,border:'1px solid gray',borderCollapse:'collapse'}}></input>
                </div>
                
                <div className="font_bold">
                  공간명(제목)
                <span className="font_plus">
                  최대18자
                </span>

                </div>
                <div className="lineup2">
                <input type="text" name="subject" onChange={this.handleSubjectChange} style={{width:"100%"}}/><br/>
                </div>

                <div className="font_bold">
                  상세 내용(내용)
                <span className="font_plus">
                  30자
                </span>

                </div>
                <div className="lineup2">
                <input type="text" name="subject" onChange={this.handleContentChange} style={{width:"100%"}}/><br/>
                </div>

                <div className="font_bold">
                  이미지 추가
                <span className="font_plus">
                  지금은 최대 한장
                </span>
                </div>
                <div className="filebox">
                <input className="upload-name" value={this.state.filename} disabled="disabled" style={{width:"50%",float:"left"}} />
                <label htmlFor="ex_filename">업로드</label>
                <input type="file" id="ex_filename" className="upload-hidden" multiple accept="image/*" onChange={this.fileslector}
                />

                <div className="font_bold">
                  지도
                <span className="font_plus">
                  위치를 찾아주세요
                </span>
                </div>

                <div>
                <input type="text" id="sample5_address" style={{float:"left",width:"70%"}} />
                <input type="button" onClick={this.sample5_execDaumPostcode} value="주소 검색" style={{float:"left",marginLeft:"20px"}}/><br/>
                <div id="map" style={{width:"100%",height:"400px",marginTop:"10px",display:"none"}}></div>
                <input type="text" id="correctaddress" placeholder="상세 주소" onChange={this.handleConcreteaddressChange}style={{float:"left",width:"70%"}}/>
                </div>

                </div>
                    <div className="select_margin">
                      <a href="/"><input type="button" className="prev_button" value="취소" style={{marginTop:"20px"}}></input></a>
                      <input type="button" className="next_button" value="등록" onClick={this.submit} style={{marginTop:"20px"}}></input>
                      
                    </div>
            </div>
            </div>
          </div>
        );
    }
}

export default Board;