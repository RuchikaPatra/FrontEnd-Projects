import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/About');
    };

    
  return (
    <div className='home-container'>
      <div className='card'>
        <h1 className='title'>Welcome to my Website</h1>
        <p className='description'>Get Ready to taste the Best Desserts of our Cafe</p>
        <button className='button' onClick={handleClick}>Let's Go</button>
      </div>
    </div>
  );
}

export default Home;
