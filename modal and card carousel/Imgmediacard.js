import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Imgmediacard extends Component{
    render(){
        return(
            <Card style={{maxWidth:345 , maxHeight:345,marginRight:50}}>
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
}

export default Imgmediacard;