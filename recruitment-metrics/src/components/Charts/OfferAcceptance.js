import React from 'react';
import GaugeChart from 'react-gauge-chart';

const OfferAcceptance = ({ data }) => (
    <div className="offer-acceptance">
        <h3>Offer Acceptance</h3>
        <GaugeChart id="gauge-chart1" 
                    nrOfLevels={30} 
                    percent={data / 100} 
                    colors={['#FF5F6D', '#FFC371']} />
    </div>
);

export default OfferAcceptance;
