import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.perventDefault();
    console.log('Login form submitted with:', formData);
  };

  const isFormValid = formData.username !== '' && formData.password !== '';

  return (
    <div className='login-container'>
      <div className='login-card'>
        <h2>Sign in to your account</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input id='username' name='username' type='text' autoComplete='username' required value={FormData.username} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' autoComplete='current-password' required value={FormData.password} onChange={handleChange} />
          </div>
          <button type='submit' onClick={handleClick} disabled = {!isFormValid}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;