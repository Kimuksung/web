import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import space1 from '../images/space1.jpg';
import space2 from '../images/space2.jpg';
import space3 from '../images/space3.jpg';
import './Images.css';
import Slider from "react-slick";
import Imgmediacard from './Imgmediacard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div style={{float:"left",marginTop:130}}>
      <ArrowForwardIosIcon
        onClick={onClick}
      />
      </div>
     
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div style={{float:"left",marginTop:130,marginRight:50}}>
        <ArrowBackIosIcon
          onClick={onClick}
          />
      </div>
    );
  }

class Images_change extends Component{
    render(){
      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
        return(
            <div className="slide-container">
            <Slide {...properties}>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${space1})`}}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${space2})`}}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${space3})`}}>
                </div>
              </div>
            </Slide>

            <div>
        </div>
          </div>
        );

    }
}
export default Images_change;