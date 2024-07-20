import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MediaCard from './MediaCard';
import { Doughnut } from 'react-chartjs-2';
import Grid from '@mui/material/Grid';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

function Api() {
    const [confirmed, setConfirmed] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeath] = useState(0);

    useEffect(() => {
        Axios.get('https://disease.sh/v3/covid-19/all')
            .then((res) => {
                console.log(res.data); // Check the response data
                setConfirmed(res.data.cases);
                setRecovered(res.data.recovered);
                setDeath(res.data.deaths);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className="box">
                        <MediaCard text='Confirmed Cases' value={confirmed} color='#0000FF'/>
                        <MediaCard text='Recovered Cases' value={recovered} color='#008B8B' />
                        <MediaCard text='Death Cases' value={deaths} color='#8B0000'/>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className="donut" style={{ width: '500px', height: '500px', marginLeft: '150px' }}>
                        <Doughnut
                            data={{
                                labels: ['Confirmed', 'Recovered', 'Deaths'],
                                datasets: [
                                    {
                                        label: 'Cases',
                                        backgroundColor: ['#0000FF', '#008B8B', '#8B0000'],
                                        data: [confirmed, recovered, deaths],
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Api;
