import React, { useState } from 'react';

const InputComponent = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue); 
  };

  return (
    <div className='App'>
        <div>
        <h3>Input Component</h3>
        <input
        type="text"
        value={value}
        onChange={handleChange}
        
        />
       </div>
    </div>


    
  );
};

export default InputComponent;
