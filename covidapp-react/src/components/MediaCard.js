import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';


export default function MediaCard({text, value, color}) {
console.log(color)
  return (
    <Card className='mycard' style={{backgroundColor:color}}>
      <CardActionArea>
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
            <div className='headtypo'>{text}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h1 style={{color: 'white', fontWeight: 400}}>
            <CountUp className='headtypo' start= {1000} duration={3} end={value}/></h1>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
