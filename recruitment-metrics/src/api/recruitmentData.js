const API_URL = 'https://randomuser.me/api/?results=100';

export const fetchRecruitmentData = async () => {
    try {
        const response = await fetch(API_URL);
        const { results } = await response.json();
        
        // Process the data to create recruitment metrics
        const metrics = processRecruitmentData(results);
        return metrics;
    } catch (error) {
        console.error('Error fetching recruitment data:', error);
        return null;
    }
};

// Function to process RandomUser data into our recruitment metrics
const processRecruitmentData = (users) => {
    const timeToHire = users.map((user, index) => ({
        date: new Date(2024, 0, index + 1).toISOString().split('T')[0],
        days: Math.floor(Math.random() * 20) + 5,
    }));

    const sourceOfHire = [
        { source: 'LinkedIn', value: Math.floor(Math.random() * 50) + 25 },
        { source: 'Referral', value: Math.floor(Math.random() * 30) + 10 },
        { source: 'Job Board', value: Math.floor(Math.random() * 20) + 10 },
    ];

    const genderRatio = [
        { gender: 'Male', value: users.filter(user => user.gender === 'male').length },
        { gender: 'Female', value: users.filter(user => user.gender === 'female').length },
    ];

    const offerAcceptance = Math.floor(Math.random() * 30) + 70;  // Random percentage between 70-100%
    const withdrawalRate = Math.floor(Math.random() * 15);  // Random percentage between 0-15%

    return {
        timeToHire,
        sourceOfHire,
        genderRatio,
        offerAcceptance,
        withdrawalRate,
    };
};
