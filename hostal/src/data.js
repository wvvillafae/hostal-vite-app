// src/data.js

// 1. IMPORTA TUS IMÁGENES AQUÍ
// Asegúrate de que estos nombres de archivo y la ruta './assets/img/'
// coincidan exactamente con cómo los tienes guardados en tu proyecto.
import camaDobleImg from './assets/img/camadoble.jpg'; // Para Habitación Doble Estándar
import camaImg from './assets/img/cama.jpg';      
import camaaImg from './assets/Img/camaa.jpg';
// Si tienes una tercera imagen para la suite, la importarías aquí también:
// import suiteDeluxeImg from './assets/img/suite-deluxe.jpg';

export const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Doble Estándar",
    precio: 85,
    capacidad: 2,
    descripcion: "Acogedora habitación con dos camas individuales o una doble.",
    servicios: ["WiFi gratis", "Baño privado", "Ventana al jardín"],
    // 2. ASIGNA LAS IMÁGENES IMPORTADAS A CADA HABITACIÓN
    imagenUrl: camaDobleImg // <-- Asignamos 'camadoble.jpg' aquí
  },
  {
    id: 2,
    nombre: "Suite Deluxe con Vista al Mar",
    precio: 150,
    capacidad: 4,
    descripcion: "Espaciosa suite con balcón privado y las mejores vistas al mar.",
    servicios: ["WiFi Premium", "Jacuzzi", "Desayuno incluido", "Minibar"],
    imagenUrl: camaaImg // <-- Asignamos 'cama.jpg' aquí
  },
  {
    id: 3,
    nombre: "Habitación Individual Económica",
    precio: 50,
    capacidad: 1,
    descripcion: "Perfecta para viajeros solos que buscan comodidad y buen precio.",
    servicios: ["WiFi gratis", "Baño privado", "Ventana al jardín"],
    imagenUrl: camaImg // <-- Asignamos 'cama.jpg' aquí (puedes cambiarla si tienes otra)
  },
];

export const hotelInfo = {
    nombre: "La Posada de Edflower's", // ¡Nombre actualizado!
    telefono: "+51 987 654 321",
    email: "contacto@edflowers.com"
};