import React, { useState } from 'react';
import { createPharmacy } from '../api';

const AddPharmacy = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfEstablishment, setDateOfEstablishment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pharmacy = { name, address, city, email, dateOfEstablishment };
    await createPharmacy(pharmacy);
    onAdd();
  };

  return (
    <div>
      <h2>Add Pharmacy</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="date" value={dateOfEstablishment} onChange={(e) => setDateOfEstablishment(e.target.value)} placeholder="Date of Establishment" required />
        <button type="submit">Add Pharmacy</button>
      </form>
    </div>
  );
};

export default AddPharmacy;
