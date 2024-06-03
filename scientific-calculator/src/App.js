import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalculatorPage from './Pages/CalculatorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <h1>Calculator</h1>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
