import React from 'react';

const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Site</h1>
        <p className="text-gray-700">You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default WelcomePage;
