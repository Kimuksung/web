import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import space1 from '../images/space1.jpg';
import space2 from '../images/space2.jpg';
import space3 from '../images/space3.jpg';
import './Images.css';

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

class Images_change extends Component{
    render(){
        return(
            <div className="slide-container">
            <Slide {...properties}>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${space1})`}}>
                  <span>Slide 1</span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${space2})`}}>
                  <span>Slide 2</span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${space3})`}}>
                  <span>Slide 3</span>
                </div>
              </div>
            </Slide>
          </div>
        );

    }
}
export default Images_change;