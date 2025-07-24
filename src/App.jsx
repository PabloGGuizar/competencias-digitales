// src/App.jsx

import React from 'react';
import { MapaConceptual } from './components/MapaConceptual';
import './App.css';

function App() {
  // Esta línea construye la URL correcta automáticamente
  const logoUrl = `${import.meta.env.BASE_URL}mapa-mental.png`;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="titulo-principal">
          {/* Aquí usamos la variable con la URL correcta */}
          <img width="40" src={logoUrl} alt="logo" />
          <span>Marco de Competencia Digital</span>
        </h1>
        <p>Haz clic en las competencias para ver más detalles</p>
      </header>
      <MapaConceptual />
    </div>
  );
}

export default App;