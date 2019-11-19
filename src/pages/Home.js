import React from 'react'

const Home = ()=>{
    return(
    <div className="picturepage">
    <section className="slide_wrap">
        <div className="slideshow-container">
            <div className="mySlides_fade">
            <img className="image" src={require('../images/space.jpg')} alt='logo' style={{ width:`100%` }}/>      
              
            </div>
            <div className="mySlides_fade">  
            <img className="image" src={require('../images/space2.jpg')} alt='logo' style={{ width:`100%` }}/>
     
            </div>
            <div className="mySlides_fade">
            <img className="image" src={require('../images/space3.jpg')} alt='logo' style={{ width:`100%` }}/>
              
            </div>
              <button className="prev" >&#10094;</button>
              <button className="next" >&#10095;</button>
            </div>
            <br/>
            <div style={{ textAlign:`center` }} >
              <span className="dot" ></span> 
              <span className="dot" ></span> 
              <span className="dot" ></span> 
            </div>
            </section>
            </div>
            );
}
/*
class Home1 extends Component{
    render(){
        return(
            <div class="mySlides fade">
            <Image1></Image1>
            <Image2></Image2>
            <Image3></Image3>
            </div>
        );
    }
}
/*
class Home2 extends Component{
    render(){
        return(
            <div class="slideshow-container">
            <Home1></Home1>
            </div>
        );
    }
}

class Home3 extends Component{
    render(){
        return(
            <section class="slide_wrap">
            <Home2></Home2>
            </section>
        );
    }
}

class Home4 extends Component{
    render(){
        return(
            <section class="space_list">
            <h1> 게시판 부분</h1>
            </section>
        );
    }
}

class Image1 extends Component{
    render(){
        return(
            <div class="mySlides fade">
            <img class="image" src={require('../images/space.jpg')} alt='logo' style={{ width:`100%` }}/>                   
            </div>
        );
    }
}
class Image2 extends Component{
    render(){
        return(
            <div class="mySlides fade">
            <img class="image" src={require('../images/space2.jpg')} alt='logo' style={{ width:`100%` }}/>                   
            </div>
        );
    }
}
class Image3 extends Component{
    render(){
        return(
            <div class="mySlides fade">
            <img class="image" src={require('../images/space3.jpg')} alt='logo' style={{ width:`100%` }}/>                   
            </div>
        );
    }
}
*/
export default Home;