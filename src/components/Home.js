import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main-container'>
      <div className='header'>
      <h1>Welcome to Ajira Digital. Nyali AYEC</h1>
      </div>
    
      <p>Latest news about Ajira program...</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/daily-attendance">Daily Attendance</Link>
      <Link to="/training-attendance">Training Attendance</Link>
    </div>
  );
};

export default Home;
