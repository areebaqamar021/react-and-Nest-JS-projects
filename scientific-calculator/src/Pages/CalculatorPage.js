import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from '../Components/Display';
import ButtonPanel from '../Components/ButtonPanel';

const CalculatorPage = () => {
  const [input, setInput] = useState('');
  const [ans, setAns] = useState('');

  const handleButtonClick = (button) => {
    if (button === 'clear') {
      setInput('');
    } else if (button === '=') {
      try {
        const result = evaluate(input);
        setInput(result.toString());
        setAns(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (button === 'Ans') {
      setInput(input + ans);
    } else if (button === 'sqrt') {
      setInput(input + 'sqrt(');
    } else if (button === 'log') {
      setInput(input + 'log(');
    } else if (button === 'ln') {
      setInput(input + 'ln(');
    } else if (button === 'sin') {
      setInput(input + 'sin(');
    } else if (button === 'cos') {
      setInput(input + 'cos(');
    } else if (button === 'tan') {
      setInput(input + 'tan(');
    } else if (button === 'pi') {
      setInput(input + 'pi');
    } else if (button === 'e') {
      setInput(input + 'e');
    } else if (button === 'exp') {
      setInput(input + 'exp(');
    } else if (button === 'abs') {
      setInput(input + 'abs(');
    } else if (button === 'fac') {
      setInput(input + '!');
    } else {
      setInput(input + button);
    }
  };

  return (
    <div className="calculator-page">
      <Display value={input} onChange={setInput} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default CalculatorPage;
