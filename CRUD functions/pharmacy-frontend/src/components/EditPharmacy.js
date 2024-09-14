import React, { useState } from 'react';
import { updatePharmacy } from '../api';

const EditPharmacy = ({ pharmacy, onUpdate }) => {
  const [name, setName] = useState(pharmacy.name);
  const [address, setAddress] = useState(pharmacy.address);
  const [city, setCity] = useState(pharmacy.city);
  const [email, setEmail] = useState(pharmacy.email);
  const [dateOfEstablishment, setDateOfEstablishment] = useState(pharmacy.dateOfEstablishment);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPharmacy = { name, address, city, email, dateOfEstablishment };
    await updatePharmacy(pharmacy._id, updatedPharmacy);
    onUpdate();
  };

  return (
    <div>
      <h2>Edit Pharmacy</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="date" value={dateOfEstablishment} onChange={(e) => setDateOfEstablishment(e.target.value)} placeholder="Date of Establishment" required />
        <button type="submit">Update Pharmacy</button>
      </form>
    </div>
  );
};

export default EditPharmacy;
