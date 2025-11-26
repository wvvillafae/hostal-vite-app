// src/components/Header.jsx
import React from 'react';
import { hotelInfo } from '../data'; // Usamos la información del hotel
import './Header.css';

function Header({ nombreHotel }) {
  return (
    <header className="main-header">
      <div className="logo">
        🌹 {nombreHotel}
      </div>
      <nav className="main-nav">
        <a href="#inicio">Inicio</a>
        <a href="#habitaciones">Habitaciones</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="btn-header-reserva">
        Llamar: {hotelInfo.telefono}
      </button>
    </header>
  );
}

export default Header;