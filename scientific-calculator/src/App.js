import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalculatorPage from './Pages/CalculatorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
