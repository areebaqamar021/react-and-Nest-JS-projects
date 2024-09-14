import React, { useEffect, useState } from 'react';
import { getPharmacies, deletePharmacy } from '../api';

const PharmacyList = ({ onEdit }) => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    loadPharmacies();
  }, []);

  const loadPharmacies = async () => {
    const response = await getPharmacies();
    setPharmacies(response.data);
  };

  const handleDelete = async (id) => {
    await deletePharmacy(id);
    loadPharmacies();
  };

  return (
    <div>
      <h2>Pharmacy List</h2>
      <ul>
        {pharmacies.map((pharmacy) => (
          <li key={pharmacy._id}>
            {pharmacy.name} - {pharmacy.city}
            <button onClick={() => onEdit(pharmacy)}>Edit</button>
            <button onClick={() => handleDelete(pharmacy._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyList;
