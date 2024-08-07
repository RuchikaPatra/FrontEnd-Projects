import './App.css';
import React, { useState } from 'react';
import InputComponent from './component/InputComponent';
import toUpperCaseHOC from './component/HigherOrderComponent';

const EnhancedInputComponent = toUpperCaseHOC(InputComponent);

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    
      <div className='App'>
        <EnhancedInputComponent onChange={handleInputChange} />
        <div className='a'>Text given: {inputValue}</div>
      </div>
    
    
  );
};

export default App;
