import React from 'react'
import Button from './Button';

const ButtonPanel = ({onButtonClick}) => {
    const buttons = [
        '7', '8', '9', '/', 'sin',
        '4', '5', '6', '*', 'cos',
        '1', '2', '3', '-', 'tan',
        '0', '.', '=', '+', 'log',
        '(', ')', '^', 'sqrt', 'clear',
        'pi', 'e', 'exp', 'abs', 'fac',
        'ln', 'deg', 'rad', '%', 'Ans'
      ];
  return (
    <div className="button-panel">
      {buttons.map((button, index) => (
        <Button key={index} label={button} onClick={onButtonClick} />
      ))}
    </div>
  )
}

export default ButtonPanel
