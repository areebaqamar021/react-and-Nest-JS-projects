import React from 'react';

const Button = ({ label, onClick }) => {
  const isOperator = ['+', '-', '*', '/', '=', 'sqrt', 'log', 'ln', 'sin', 'cos', 'tan'].includes(label);
  const isSpecial = ['clear', 'Ans', 'pi', 'e', 'exp', 'abs', 'fac', '(', ')', '^', 'deg', 'rad', '%'].includes(label);

  return (
    <button
      className={`button ${isOperator ? 'button-operator' : ''} ${isSpecial ? 'button-special' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
