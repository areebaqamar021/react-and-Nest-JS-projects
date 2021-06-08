import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

function Api() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    const [data, setData] = useState({})
    useEffect(()=>{
        Axios.get('https://covid19.mathdro.id/api')
        .then((res)=> {
            console.log(res.data)
            setConfirmed(res.data.confirmed.value);
            setRecovered(res.data.recovered.value);
            setDeath(res.data.deaths.value);
            setData({
                confirmed,
                recovered,
                deaths
            })
        })

    },[])
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={3}>
        <div className="box">
            <MediaCard text='Confirmed Cases' value={confirmed} color='#0000FF'/>
            <MediaCard text='Recoverd Cases' value={recovered} color='#008B8B' />
            <MediaCard text='Death Cases' value={deaths} color='#8B0000'/>
        </div>
        </Grid>
        <Grid item xs={9}>
        <div className="donut">

        <Doughnut data={{
          labels: ['confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#0000FF', '#008B8B', '#8B0000'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}/>
        </div>
        </Grid>
        </Grid>
        </>
    )
}

export default Api