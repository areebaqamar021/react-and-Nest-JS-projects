import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './styles/styles.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default App;
