// src/components/RoomCard.jsx (CÓDIGO CORREGIDO)
import React from 'react';
import './RoomCard.css';

function RoomCard({ habitacion }) {
  // Desestructuramos las propiedades, incluyendo imagenUrl
  const { nombre, precio, capacidad, descripcion, servicios, imagenUrl } = habitacion;

  return (
    <div className="room-card">
      <div className="room-image-container">
        
        {/*
          CAMBIO CLAVE: Usamos el tag <img> y pasamos la imagenUrl 
          como el atributo src. También añadimos una clase para el CSS.
        */}
        <img 
          src={imagenUrl} 
          alt={`Imagen de la ${nombre}`} 
          className="room-image-tag" 
        /> 
        
        <span className="room-price">${precio} / Noche</span>
      </div>
      
      <div className="room-details">
        <h2>{nombre}</h2>
        <p className="description">{descripcion}</p>
        
        <div className="capacity">
          Capacidad: **{capacidad}** personas
        </div>
        
        <ul className="services-list">
          {servicios.map((servicio, index) => (
            <li key={index}>✅ {servicio}</li>
          ))}
        </ul>
        
        <button className="btn-reserva">Reservar Ahora</button>
      </div>
    </div>
  );
}

export default RoomCard;