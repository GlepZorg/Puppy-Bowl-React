import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <Link to="/">Home</Link>
      <Link to="/players">All Players</Link>
      <Link to="/new-player">Add New Player</Link> 
      <Link to="/player-search">Player Search</Link>
      
    </nav>
  );
}

export default NavBar;
