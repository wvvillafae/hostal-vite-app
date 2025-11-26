// src/components/RoomList.jsx
import React, { useState } from 'react';
import RoomCard from './RoomCard';
import { habitaciones } from '../data';
import './RoomList.css'; 

function RoomList() {
  const [capacidadFiltro, setCapacidadFiltro] = useState(1);
  
  // Lógica para filtrar habitaciones
  const habitacionesFiltradas = habitaciones.filter(hab => 
    hab.capacidad >= capacidadFiltro
  );

  return (
    <section className="room-list-section">
      <h1>Nuestras Habitaciones</h1>

      <div className="filter-controls">
        <label htmlFor="capacidad">Filtrar por Capacidad Mínima:</label>
        <select 
          id="capacidad" 
          value={capacidadFiltro} 
          onChange={(e) => setCapacidadFiltro(Number(e.target.value))}
        >
          <option value={1}>1 persona</option>
          <option value={2}>2 personas</option>
          <option value={3}>3+ personas</option>
        </select>
      </div>

      <div className="rooms-container">
        {habitacionesFiltradas.length > 0 ? (
          habitacionesFiltradas.map(habitacion => (
            // Pasar cada objeto de habitacion como una 'prop' al RoomCard
            <RoomCard key={habitacion.id} habitacion={habitacion} />
          ))
        ) : (
          <p>No hay habitaciones disponibles con esa capacidad.</p>
        )}
      </div>
    </section>
  );
}

export default RoomList;