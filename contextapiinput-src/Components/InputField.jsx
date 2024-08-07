import React from 'react';
import { useEffect, useState } from 'react';

function InputField () {
    const [inputValue , setInputValue]=useState('')


    useEffect(()=>{
        const storedValue = localStorage.getItem('inputValue')
        if(storedValue){
            setInputValue(storedValue);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('inputValue',inputValue);

    },[inputValue])


    return(
        <div className='input'>
            <label>Input Field</label>
            <input type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Type Something...' />
            <p>Input Value: {inputValue}</p>
        </div>
    )
}

export default InputField;