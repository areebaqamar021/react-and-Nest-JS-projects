# Recruitment Metrics Dashboard

## Overview

The Recruitment Metrics Dashboard is a ReactJS-based web application designed to track and analyze key recruitment metrics such as time to hire, source of hire, gender ratio, offer acceptance ratio, and candidate withdrawal rate. The application integrates with Firebase for data storage and retrieval and uses various charting libraries for data visualization.

## Features

- **Time to Hire Analysis**: Line chart showing the trend of time to hire over different periods.
- **Source of Hire Analysis**: Pie chart illustrating the percentage contribution of various sources.
- **Gender Ratio Analysis**: Pie chart showing the gender distribution of candidates.
- **Offer Acceptance Ratio**: Display of the percentage of accepted offers.
- **Candidate Withdrawal Rate**: Gauge chart indicating the rate of candidate withdrawals.
- **Responsive Design**: Ensures usability across different devices (desktops, tablets, mobile).

## Technologies Used

- **ReactJS**: Front-end library for building user interfaces.
- **Firebase**: Backend service for storing and fetching recruitment data.
- **Recharts**: Library for creating interactive charts.
- **Material-UI**: CSS framework for responsive design and UI components.


## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/areebaqamar021/recruitment-metrics-dashboard.git
   cd recruitment-metrics
   
2. **Install dependencies:**

   ```bash
   npm install

3. **Firebase Configuration:**

- Go to the Firebase Console.
- Create a new project and add a web app.
- Copy the Firebase config object and paste it into src/firebase/config.js.

```bash
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

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
│   ├── components/
│   │   ├── Dashboard.js
│   ├── firebase.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── README.md
```

## Acknowledgements

- [ReactJS](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/): A platform developed by Google for creating mobile and web applications.
- [Recharts](https://recharts.org/en-US/): A composable charting library built on React components.
- [Material-UI](https://mui.com/): A popular React UI framework for building responsive web applications.

## Usage

- **Dashboard Overview**: Displays summary statistics and key metrics.
- **Interactive Charts**: Provides visual insights into various recruitment metrics.
- **Filters and Search**: Allows filtering data by date range, job position, department, or specific metrics.



