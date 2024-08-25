import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>MegaMuebles</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
