// Header.js
import React from 'react';
import './Header.css'; // Importamos el archivo de estilos para el Header

import alcoholImage from '../img/alcohol.png';
import botiquinImage from '../img/botiquin.jpg';
import cascoImage from '../img/casco.jpg';
import gafasImage from '../img/gafas.png';
import guantesImage from '../img/guantes.jpg';
import mascaraImage from '../img/mascara.png';

function Header() {
  return (
    <header className="header-container">
      <h1>Tu seguridad es nuestra prioridad</h1>
      
      <div className="contenedor-imagenes">
        <div className="imagen-con-texto">
          <img src={alcoholImage} alt="Alcohol Safety Product" className="producto-imagen" />
          <div className="descripcion">
            <h2>Alcohol antiséptico</h2>
            <p>Precio: 15.000</p>
          </div>
        </div>
        <div className="imagen-con-texto">
          <img src={botiquinImage} alt="Botiquin Safety Product" className="producto-imagen" />
          <div className="descripcion">
            <h2>Botiquín Primeros Auxilios</h2>
            <p>Precio: 40.000</p>
          </div>
        </div>
        <div className="imagen-con-texto">
          <img src={cascoImage} alt="Casco Safety Product" className="producto-imagen" />
          <div className="descripcion">
            <h2>Casco de protección</h2>
            <p>Precio: 20.000</p>
          </div>
        </div>
        
        <div className="imagen-con-texto">
          <img src={gafasImage} alt="Gafas Safety Product" className="producto-imagen" />
          <div className="descripcion">
            <h2>Gafas de protección</h2>
            <p>Precio: 12.000</p>
          </div>
        </div>
        <div className="imagen-con-texto">
          <img src={guantesImage} alt="Guantes Safety Product" className="producto-imagen" />
          <div className="descripcion">
            <h2>Guantes de látex</h2>
            <p>Precio: 5.000</p>
          </div>
        </div>
        <div className="imagen-con-texto">
          <img src={mascaraImage} alt="Mascara Safety Product" className="producto-imagen" />
          <div className="descripcion">
            <h2>Careta de protección</h2>
            <p>Precio: 30.000</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
