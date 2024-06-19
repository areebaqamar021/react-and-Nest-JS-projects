import React, { useState } from 'react';
import './index.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
