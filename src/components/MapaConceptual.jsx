// src/components/MapaConceptual.jsx

import React, { useState, useMemo } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { competencias } from '../data/competencias';
import { ModalCompetencia } from './ModalCompetencia';
import './MapaConceptual.css';

export const MapaConceptual = () => {
  // ... (toda la lógica de useState, useMemo, handlers, etc. se queda igual)
  const [modalInfo, setModalInfo] = useState(null);

  const handleOpenModal = (competencia) => {
    for (const area of competencias) {
      const encontrada = area.children.find(c => c.id === competencia.id);
      if (encontrada) {
        setModalInfo(encontrada);
        break;
      }
    }
  };

  const handleCloseModal = () => setModalInfo(null);

  const { nodes, edges } = useMemo(() => {
    const allNodes = [];
    const allEdges = [];

    const nodeWidth = 200;
    const horizontalGap = 0;
    const verticalGap = 130;
    const branchGap = -400;

    const branchWidths = competencias.map(area => 
      area.children.length * nodeWidth + (area.children.length - 1) * horizontalGap
    );
    const totalWidth = branchWidths.reduce((sum, width) => sum + width, 0) + (competencias.length - 1) * branchGap;
    let currentX = -totalWidth / 2;

    allNodes.push({
      id: 'root',
      data: { label: 'Competencias Digitales' },
      position: { x: 0, y: 0 },
      type: 'input',
      className: 'nodo-central',
    });

    competencias.forEach((area, i) => {
      const isAbove = i % 2 !== 0;
      const yMultiplier = isAbove ? -1 : 1;
      const branchWidth = branchWidths[i];
      const areaX = currentX + branchWidth / 2;
      const areaY = yMultiplier * verticalGap;
      
      allNodes.push({
        id: area.id, data: { label: area.label }, position: { x: areaX, y: areaY }, className: 'nodo-area'
      });
      
      allEdges.push({ 
        id: `root-${area.id}`, 
        source: 'root', 
        target: area.id, 
        type: 'smoothstep',
        animated: true,
        style: { strokeDasharray: '5 5' }
      });

      area.children.forEach((comp, j) => {
        const compX = currentX + j * (nodeWidth + horizontalGap);
        const compY = yMultiplier * (verticalGap * 2.2);
        
        allNodes.push({
          id: comp.id,
          data: { label: (<div onClick={() => handleOpenModal(comp)} onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(comp)} role="button" tabIndex="0">{comp.label}</div>) },
          position: { x: compX, y: compY },
          className: 'nodo-competencia-hijo',
        });
        allEdges.push({ id: `${area.id}-${comp.id}`, source: area.id, target: comp.id, type: 'smoothstep' });
      });
      currentX += branchWidth + branchGap;
    });

    return { nodes: allNodes, edges: allEdges };
  }, []);

  return (
    // --- ÚNICO CAMBIO IMPORTANTE AQUÍ ---
    // Quitamos el <div> que envolvía a ReactFlow y al modal.
    // El modal se renderiza en el portal de React, no necesita estar dentro.
    <>
      <ReactFlow nodes={nodes} edges={edges} fitView fitViewOptions={{ padding: 0.2, duration: 800 }}>
        <MiniMap zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>
      {modalInfo && <ModalCompetencia competencia={modalInfo} onClose={handleCloseModal} />}
    </>
  );
};