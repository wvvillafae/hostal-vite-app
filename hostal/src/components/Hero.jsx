// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

// 🛑 1. IMPORTA TU IMAGEN
import heroImage from '../assets/img/posada-hero.png'; // Asegúrate que el nombre y la extensión coincidan

function Hero() {
  return (
    // 🛑 2. APLICA LA IMAGEN EN LÍNEA AL DIV hero-section
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <h1>El Punto de Encuentro de la Aventura y el Buen Descanso.</h1>
        <p>Reserva las mejores suites con vista al mar y disfruta de una estadía inolvidable.</p>
        <button className="btn-hero-principal">
          Ver Habitaciones Ahora
        </button>
      </div>
    </div>
  );
}

export default Hero;