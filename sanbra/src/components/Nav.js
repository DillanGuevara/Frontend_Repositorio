import React from 'react';
import './Nav.css';
import logo from '../logo.svg';

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo"><img src={logo} alt="SanBra Seguridad y Seguros" className="logo" /></div>
        <div className="company-name">SanBra Seguridad y Seguros</div>
      </div>
      <div className="nav-right">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/login">Iniciar Sesión</a></li>
          <li><a href="/registro">Registro</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
