import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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
        <Button><a href="/login"> 로그인이 필요합니다. </a></Button>
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
  }

  class Loginmodal extends Component{
    render(){
          return(
              <SimpleModal></SimpleModal>
          );
      }
  }

  export default Loginmodal;