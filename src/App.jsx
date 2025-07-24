// src/App.jsx

import React from 'react';
import { MapaConceptual } from './components/MapaConceptual';
import './App.css'; // Importamos un nuevo archivo de estilos para la App

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 class="titulo-principal">
          <img width="40" src="/mapa-mental.png" alt="logo" />
          <span>Marco de Competencias Digitales</span>
        </h1>
        <p>👇 Haz clic en las competencias para ver más detalles</p>
      </header>
      <MapaConceptual />
    </div>
  );
}

export default App;