import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const ALCHEMY_API_KEY = '8IkgcjH5ELzkZPvRW181NMH9GxJI7FWV';
const ALCHEMY_API_URL = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

function App() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  const getAccountDetails = async () => {
    try {
      const response = await axios.post(ALCHEMY_API_URL, {
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [account, 'latest'],
        id: 1,
      });

      const balanceInEth = parseFloat(response.data.result) / 1e18;
      setBalance(balanceInEth.toFixed(5));
    } catch (error) {
      console.error('Error fetching account details', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Web3 Alchemy React App</h1>
        <input
          type="text"
          placeholder="Enter Ethereum Address"
          value={account}
          onChange={handleChange}
        />
        <button onClick={getAccountDetails}>Get Account Details</button>
        {balance && <p>Balance: {balance} ETH</p>}
      </header>
    </div>
  );
}

export default App;
