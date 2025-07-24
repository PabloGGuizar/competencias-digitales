// src/App.jsx

import React from 'react';
// --- 1. IMPORTA LA IMAGEN AQUÍ ---
import mapaMentalLogo from './assets/mapa-mental.png'; 
import { MapaConceptual } from './components/MapaConceptual';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        {/* --- 2. USA LA VARIABLE IMPORTADA EN EL SRC --- */}
        <h1 className="titulo-principal">
          <img width="40" src={mapaMentalLogo} alt="logo" />
          <span>Marco de Competencia Digital</span>
        </h1>
        <p>Haz clic en las competencias para ver más detalles</p>
      </header>
      <MapaConceptual />
    </div>
  );
}

export default App;