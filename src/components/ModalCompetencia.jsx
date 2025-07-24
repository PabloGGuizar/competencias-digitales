// src/components/ModalCompetencia.jsx

import React from 'react';
import './ModalCompetencia.css';

export const ModalCompetencia = ({ competencia, onClose }) => {
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!competencia) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{competencia.label}</h2>
        <p>{competencia.descripcion}</p>

        {/* Esta sección ahora siempre encontrará los datos si tu archivo .js está completo */}
        {Array.isArray(competencia.niveles) && competencia.niveles.length > 0 && (
          <>
            <h3>Niveles de desempeño:</h3>
            <ul>
              {competencia.niveles.map(nivel => (
                <li key={nivel.id} className={`nivel-${nivel.id}`}>
                  <strong>{nivel.label}:</strong> {nivel.descripcion}
                </li>
              ))}
            </ul>
          </>
        )}
        
        <button onClick={onClose} autoFocus>
          Cerrar
        </button>
      </div>
    </div>
  );
};