import React, { useEffect, useState } from 'react';
import { fetchRecruitmentData } from '../api/recruitmentData';
import TimeToHireChart from './Charts/TimeToHireChart';
import SourceOfHireChart from './Charts/SourceOfHireChart';
import GenderRatioChart from './Charts/GenderRatioChart';
import OfferAcceptance from './Charts/OfferAcceptance';
import WithdrawalRate from './Charts/WithdrawalRate';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchRecruitmentData();
            setData(result);
        };

        fetchData();
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="dashboard">
            <TimeToHireChart data={data.timeToHire} />
            <SourceOfHireChart data={data.sourceOfHire} />
            <GenderRatioChart data={data.genderRatio} />
            <OfferAcceptance data={data.offerAcceptance} />
            <WithdrawalRate data={data.withdrawalRate} />
        </div>
    );
};

export default Dashboard;
