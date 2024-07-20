import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import CountUp from 'react-countup';

export default function MediaCard({ text, value, color }) {
    return (
        <Card className='mycard' style={{ backgroundColor: color }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className='headtypo'>{text}</div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h1 style={{ color: 'white', fontWeight: 400 }}>
                            <CountUp start={0} duration={3} end={value} separator="," />
                        </h1>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
