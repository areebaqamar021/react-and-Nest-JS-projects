# Recruitment Metrics Dashboard

## Overview

The Recruitment Metrics Dashboard is a ReactJS-based web application designed to track and analyze key recruitment metrics such as time to hire, source of hire, gender ratio, offer acceptance ratio, and candidate withdrawal rate. The application integrates with an external API for data retrieval and uses various charting libraries for data visualization.

## Features

- **Time to Hire Analysis**: Line chart showing the trend of time to hire over different periods.
- **Source of Hire Analysis**: Pie chart illustrating the percentage contribution of various sources.
- **Gender Ratio Analysis**: Pie chart showing the gender distribution of candidates.
- **Offer Acceptance Ratio**: Display of the percentage of accepted offers using a gauge chart.
- **Candidate Withdrawal Rate**: Gauge chart indicating the rate of candidate withdrawals.
- **Responsive Design**: Ensures usability across different devices (desktops, tablets, mobile).

## Technologies Used

- **ReactJS**: Front-end library for building user interfaces.
- **RandomUser API**: External API for fetching candidate data.
- **Recharts**: Library for creating interactive charts.
- **CSS Flexbox/Grid**: For responsive layout and styling.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/areebaqamar021/recruitment-metrics-dashboard.git
   cd recruitment-metrics
   
2. **Install dependencies:**

   ```bash
   npm install

4. **Start the application:**

   ```bash
   npm start
```
## Folder Structure

The project is organized as follows:

```plaintext
recruitment-metrics/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/
│   │   └── recruitmentData.js    
│   ├── components/
│   │   ├── Charts/
│   │   │   ├── TimeToHireChart.js  
│   │   │   ├── SourceOfHireChart.js 
│   │   │   ├── GenderRatioChart.js 
│   │   │   ├── OfferAcceptance.js  
│   │   │   ├── WithdrawalRate.js   
│   │   ├── Layout/
│   │   │   ├── Header.js           
│   │   │   └── Footer.js           
│   │   ├── Dashboard.js            
│   │   ├── Dashboard.css           
│   ├── App.js                      
│   ├── index.js                   
│   └── styles/
│       └── styles.css              
├── .gitignore
├── package.json
├── README.md
```

## Acknowledgements

- [ReactJS](https://reactjs.org/): A JavaScript library for building user interfaces.
- [RandomUser API](https://randomuser.me/): API used for simulating recruitment data.
- [Recharts](https://recharts.org/en-US/): A composable charting library built on React components.
- [CSS Tricks](https://css-tricks.com/): For responsive design patterns.

## Usage

- **Dashboard Overview**: Displays summary statistics and key metrics.
- **Interactive Charts**: Provides visual insights into various recruitment metrics.
- **Responsive Design**: Optimized for viewing on both mobile and desktop devices.

