import React, { useState } from 'react';
import PharmacyList from './components/PharmacyList';
import AddPharmacy from './components/AddPharmacy';
import EditPharmacy from './components/EditPharmacy';

function App() {
  const [editing, setEditing] = useState(false);
  const [currentPharmacy, setCurrentPharmacy] = useState(null);

  const handleAdd = () => {
    setEditing(false);
    window.location.reload();
  };

  const handleEdit = (pharmacy) => {
    setEditing(true);
    setCurrentPharmacy(pharmacy);
  };

  const handleUpdate = () => {
    setEditing(false);
    window.location.reload();
  };

  return (
    <div className="App">
      {editing ? (
        <EditPharmacy pharmacy={currentPharmacy} onUpdate={handleUpdate} />
      ) : (
        <>
          <AddPharmacy onAdd={handleAdd} />
          <PharmacyList onEdit={handleEdit} />
        </>
      )}
    </div>
  );
}

export default App;
