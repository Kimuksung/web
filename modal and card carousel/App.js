import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Imgmediacard from "./Imgmediacard"
/*
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
*/

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/*
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <h1>{this.props.number}</h1>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <p>제목</p>
        <p>위치</p>
      </CardActions>
    </Card>
  );
}
*/
/*
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position: 'absolute',
    width: 400,
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: `yellow`,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button1:{
    display:`flex`
  },
  button2:{
    alignItems:'flex-end'
  },
  text1:{
    fontweight:`bold`
  }
}));

function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>로그인이 필요합니다.</Button>
    </div>
  );
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <AssignmentIndIcon></AssignmentIndIcon>
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className={classes.button1}>
          <IconButton ><AssignmentIndIcon></AssignmentIndIcon></IconButton>          
          <TextButtons ></TextButtons>
          <IconButton className={classes.button2} onClick={handleClose} ><ExitToAppIcon></ExitToAppIcon></IconButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}*/
/*<div style={{width:600,height:300, flexDirection: 'row'}}>
      <div style={{flex: 1 ,float:'left',marginRight: 50}}>
      <Imgmediacard number={1}></Imgmediacard></div>
      <div style={{flex: 1,float:'left',marginRight: 50}}>
      <Imgmediacard number={2}></Imgmediacard></div>
      <div style={{flex: 1,float:'left',marginRight: 50}}>
      <Imgmediacard number={3}></Imgmediacard></div>
      </div>
      */

     function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div style={{float:"left",marginTop:130,marginRight:50}}>
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

class App extends Component{
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="temp1" style={{width:700,height:700 ,float:"left"}}>


        <Slider {...settings}>
          <div >
          <Imgmediacard number={1} ></Imgmediacard>
          </div>
          <div>
          <Imgmediacard number={2}></Imgmediacard>
          </div>
          <div>
          <Imgmediacard number={3}></Imgmediacard>
          </div>
          <div>
          <Imgmediacard number={4}></Imgmediacard>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
        </div>

    );
  }
}

export default App;
