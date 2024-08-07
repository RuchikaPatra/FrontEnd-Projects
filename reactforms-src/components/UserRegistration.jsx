import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    validateUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    validateConfirmPassword(event.target.value);
  };

  const validateUsername = (usernameValue) => {
    if (!/^[a-zA-Z0-9]{4,20}$/.test(usernameValue)) {
      setUsernameError('Username must be between 4 and 20 characters long, allowing only alphanumeric characters.');
    } else {
      setUsernameError('');
    }
    validateForm();
  };

  const validatePassword = (passwordValue) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(passwordValue)) {
      setPasswordError('Password must be at least 6 characters long, containing at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
    validateForm();
  };

  const validateConfirmPassword = (confirmPasswordValue) => {
    if (confirmPasswordValue !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
    validateForm();
  };

  const validateForm = () => {
    if (username && password && confirmPassword && !usernameError && !passwordError && !confirmPasswordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully');
  };

  return (
    <div className='App-Body'>
      <br></br>
      <br></br>
      <br></br>
      <div className='header'>Registration Form</div>
      <br></br>
      <br></br>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className='body'>

          <div className='in'>
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className={usernameError ? 'invalid' : ''}
            />
            {usernameError && <div className="error-message">{usernameError}</div>}
          </div>
          <div className='in'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={passwordError ? 'invalid' : ''}
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          <div className='in'>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={confirmPasswordError ? 'invalid' : ''}
            />
            {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
            <br></br>
            <br></br>
            <br></br>
          </div>
          <button type="submit" disabled={!formValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistrationForm;