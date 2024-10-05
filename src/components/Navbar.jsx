import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path is correct
import '../App.css'; // Ensure the CSS file exists

const Navbar = () => {
  return (
    <nav className='navbar'>
      <li className='logo-item'>
        <img src={logo} alt="logo" className='logo' />
        <span className='logo-text'>Tr@vel</span>
      </li>
      <div className='navbar-links'>
        <li><a href="#home" className='nav-link'>Home</a></li>
        <li><a href="#about" className='nav-link'>Travel</a></li>
        <li><a href="#contact" className='nav-link'>Contact</a></li>
        <li><Link to="/admin" className='nav-link'>News</Link></li> {/* Link to Admin page */}
      </div>
    </nav>
  );
};

export default Navbar;
