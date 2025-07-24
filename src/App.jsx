// src/App.jsx

import React from 'react';
import { MapaConceptual } from './components/MapaConceptual';
import './App.css';

function App() {
  const logoUrl = `${import.meta.env.BASE_URL}mapa-mental.png`;

  return (
    <div className="app-container">
      <header className="app-header">
        {/* --- NUEVO CONTENEDOR PARA TÍTULO Y SUBÍNDICE --- */}
        <div className="title-container">
          <h1 className="titulo-principal">
            <img width="40" src={logoUrl} alt="logo" />
            <span>Marco de Competencia Digital</span>
          </h1>
          <a
            href="https://www.boe.es/boe/dias/2020/07/13/pdfs/BOE-A-2020-7775.pdf"
            className="info-link-subscript"
            target="_blank"
            rel="noopener noreferrer"
            title="Saber más sobre el marco de competencias digitales"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </a>
        </div>

        <p>Haz clic en las competencias para ver más detalles</p>
      </header>

      <MapaConceptual />

      <footer className="app-footer">
        <p><strong>UVEG Maestría en Educación en Línea </strong> 
          | Módulo: Procesos de enseñanza aprendizaje en Entornos Virtuales de Aprendizaje (EVA)
          | Reto 3. Las competencias digitales
          | <em>Pablo Gómez</em>
        </p>
      </footer>
    </div>
  );
}

export default App;