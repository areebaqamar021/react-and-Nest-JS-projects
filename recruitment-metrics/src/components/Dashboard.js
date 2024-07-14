import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, PieChart, Pie, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';
import GaugeChart from 'react-gauge-chart';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
  const [timeToHireData, setTimeToHireData] = useState([]);
  const [sourceOfHireData, setSourceOfHireData] = useState([]);
  const [genderRatioData, setGenderRatioData] = useState([]);
  const [offerAcceptanceRatio, setOfferAcceptanceRatio] = useState(0.0);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "recruitment_metrics"));
      const timeToHire = [];
      const sourceOfHire = [];
      const genderRatio = [{ name: 'Male', value: 60 }, { name: 'Female', value: 40 }];
      let offersAccepted = 8;
      let offersProvided = 11;
      let acceptanceRatio = offersAccepted / offersProvided * 100;
      
      querySnapshot.forEach((doc) => {
        timeToHire.push({ date: doc.data().date, timeToHire: doc.data().timeToHire });
        sourceOfHire.push({ source: doc.data().source, count: doc.data().count });
      });
      
      setTimeToHireData(timeToHire);
      setSourceOfHireData(sourceOfHire);
      setGenderRatioData(genderRatio);
      setOfferAcceptanceRatio(acceptanceRatio);
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f0f2f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', color: '#003366' }}>
        Recruitment Metrics Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00509e' }}>Time to Hire</Typography>
            <LineChart width={300} height={200} data={timeToHireData}>
              <Line type="monotone" dataKey="timeToHire" stroke="#ff7300" strokeWidth={2} />
              <Tooltip />
              <Legend />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00509e' }}>Source of Hire</Typography>
            <PieChart width={300} height={200}>
              <Pie dataKey="count" isAnimationActive={false} data={sourceOfHireData} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00509e' }}>Gender Ratio</Typography>
            <PieChart width={300} height={200}>
              <Pie data={genderRatioData} dataKey="value" cx={150} cy={100} innerRadius={50} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00509e' }}>Offer Acceptance Ratio</Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>{offerAcceptanceRatio.toFixed(2)}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00509e' }}>Application Received by Source</Typography>
            <BarChart width={300} height={200} data={sourceOfHireData}>
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#ffc658" />
            </BarChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00509e' }}>Candidate Withdrawal Rate</Typography>
            <GaugeChart id="gauge-chart" nrOfLevels={3} colors={["#FF5F6D", "#FFC371"]} arcWidth={0.3} percent={0.58} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
