// src/App.jsx
import React from 'react';
import Header from './components/Header'; // Asume que creas este componente
import Hero from './components/Hero';     // Asume que creas este componente
import RoomList from './components/RoomList';
import { hotelInfo } from './data';
import './App.css'; // Estilos globales

function App() {
  return (
    <div className="hotel-app">
      {/* Pasar el nombre del hotel como prop al Header */}
      <Header nombreHotel={hotelInfo.nombre} /> 
      
      {/* Componente Hero con mensaje principal */}
      <Hero /> 
      
      {/* La sección principal de las habitaciones */}
      <main>
        <RoomList />
      </main>
      
      {/* Componente Footer (lo dejaré simple por ahora) */}
      <footer className="footer">
        <p>© 2024 {hotelInfo.nombre}. Contacto: {hotelInfo.email}</p>
      </footer>
    </div>
  );
}

export default App;