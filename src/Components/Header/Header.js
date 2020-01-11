import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="header">
      <Link to={'/'}>
        <h1 className="main-header">DEAD ENDS</h1>
      </Link>
      <div className="header-line"></div>
    </nav>
  )
}

export default Header;
