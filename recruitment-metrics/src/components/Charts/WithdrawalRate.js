import React from 'react';
import GaugeChart from 'react-gauge-chart';

const WithdrawalRate = ({ data }) => (
    <div className="withdrawal-rate">
        <h3>Candidate Withdrawal Rate</h3>
        <GaugeChart id="gauge-chart2" 
                    nrOfLevels={30} 
                    percent={data / 100} 
                    colors={['#00C49F', '#FFBB28']} />
    </div>
);

export default WithdrawalRate;
