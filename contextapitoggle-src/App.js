import './App.css';
import React, { useContext } from 'react';
import { ThemeContext } from './Components/ThemeContext';

function App() {
  const {theme ,toggleTheme} = useContext(ThemeContext)
  
  return (
    <div className={`app ${theme}`}>
      <header className='app-header'>
        <h1>Welcome to the Theme Toggler App</h1>
        <button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'dark' : 'light'} Theme
        </button>
      </header>
    </div>
  );
}

export default App;
