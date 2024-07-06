import React from 'react';

const Display = ({ value, onChange }) => {
  return (
    <input
      className="display"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly
    />
  );
};

export default Display;
