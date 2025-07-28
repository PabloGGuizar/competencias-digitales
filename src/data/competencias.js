// src/data/competencias.js

export const competencias = [
  {
    id: 'area1',
    label: 'Área 1: Información y alfabetización',
    children: [
      {
        id: '1.1',
        label: '🔎 Navegación y búsqueda',
        descripcion: 'Buscar, acceder, seleccionar y filtrar información digital.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Realiza búsquedas simples con ayuda.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Usa filtros y estrategias de búsqueda.' },
          { id: 'c', label: 'Avanzado', descripcion: 'Diseña y enseña estrategias de búsqueda. ' }
        ]
      },
      {
        id: '1.2',
        label: '🧪 Evaluación de información',
        descripcion: 'Evaluar la fiabilidad y relevancia de contenidos digitales.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Distingue contenidos poco fiables con ayuda.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Evalúa críticamente fuentes y autoría.' },
          { id: 'c', label: 'Avanzado', descripcion: 'Promueve y enseña criterios de evaluación. ' }
        ]
      },
      {
        id: '1.3',
        label: '💾 Almacenamiento digital',
        descripcion: 'Almacenar y recuperar recursos digitales de forma organizada.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Guarda archivos en ubicaciones conocidas.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Organiza archivos en la nube y dispositivos. ' },
          { id: 'c', label: 'Avanzado', descripcion: 'Establece y enseña sistemas de almacenamiento.' }
        ]
      }
    ]
  },
  {
    id: 'area2',
    label: 'Área 2: Comunicación y colaboración',
    children: [
      {
        id: '2.1',
        label: '💬 Interacción digital',
        descripcion: 'Utilizar herramientas digitales para comunicarse de forma efectiva.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Participa en conversaciones simples con ayuda.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Se comunica con fluidez en distintos canales. ' },
          { id: 'c', label: 'Avanzado', descripcion: 'Coordina entornos de comunicación complejos.' }
        ]
      },
      {
        id: '2.2',
        label: '🔗 Compartir contenidos',
        descripcion: 'Compartir información y contenidos digitales de forma segura.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Comparte archivos por medios básicos.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Usa plataformas para compartir contenidos. ' },
          { id: 'c', label: 'Avanzado', descripcion: 'Lidera proyectos colaborativos con recursos.' }
        ]
      },
      {
        id: '2.3',
        label: '🌐 Participación ciudadana',
        descripcion: 'Participar activamente en comunidades y plataformas digitales.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Conoce plataformas de participación digital.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Participa activamente en comunidades online. ' },
          { id: 'c', label: 'Avanzado', descripcion: 'Promueve la participación crítica y constructiva.' }
        ]
      },
      {
        id: '2.4',
        label: '🤝 Colaboración digital',
        descripcion: 'Trabajar colaborativamente usando tecnologías digitales.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Colabora en tareas básicas con herramientas.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Participa en proyectos con herramientas digitales. ' },
          { id: 'c', label: 'Avanzado', descripcion: 'Coordina y lidera iniciativas colaborativas.' }
        ]
      },
      {
        id: '2.5',
        label: '🧑‍⚖️ Netiqueta',
        descripcion: 'Aplicar normas de conducta y cortesía en el entorno digital.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Reconoce y respeta reglas básicas.' },
          { id: 'b', label: 'Intermedio', descripcion: 'Aplica buenas prácticas en interacciones. ' },
          { id: 'c', label: 'Avanzado', descripcion: 'Promueve entornos respetuosos y modera.' }
        ]
      },
      {
        id: '2.6',
        label: '🆔 Identidad digital',
        descripcion: 'Gestionar la propia identidad y reputación digital.',
        niveles: [
          { id: 'a', label: 'Básico', descripcion: 'Es consciente de su huella digital. ' },
          { id: 'b', label: 'Intermedio', descripcion: 'Gestiona su imagen y presencia digital.' },
          { id: 'c', label: 'Avanzado', descripcion: 'Asesora sobre construcción de identidad profesional.' }
        ]
      }
    ]
  },
  {
    id: 'area3',
    label: 'Área 3: Creación de contenido digital',
    children: [
        { id: '3.1', label: '📝 Desarrollo de contenidos', descripcion: 'Crear y editar contenidos en diferentes formatos digitales.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Crea contenidos sencillos.'}, {id: 'b', label: 'Intermedio', descripcion: 'Crea y edita contenidos multimedia.'}, {id: 'c', label: 'Avanzado', descripcion: 'Produce contenidos de alta calidad. '}] },
        { id: '3.2', label: '🔄 Integración y reelaboración', descripcion: 'Modificar y combinar recursos para crear contenido nuevo.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Reutiliza contenidos con ayuda.'}, {id: 'b', label: 'Intermedio', descripcion: 'Integra y reelabora contenidos de forma autónoma.'}, {id: 'c', label: 'Avanzado', descripcion: 'Crea obras derivadas complejas. '}] },
        { id: '3.3', label: '⚖️ Derechos de autor', descripcion: 'Comprender y aplicar licencias y derechos de autor.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Reconoce la existencia de licencias. '}, {id: 'b', label: 'Intermedio', descripcion: 'Aplica licencias comunes correctamente.'}, {id: 'c', label: 'Avanzado', descripcion: 'Asesora sobre el uso de licencias.'}] },
        { id: '3.4', label: '💻 Programación', descripcion: 'Escribir y modificar código para personalizar entornos.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Modifica scripts o código sencillo.'}, {id: 'b', label: 'Intermedio', descripcion: 'Desarrolla pequeños programas o webs. '}, {id: 'c', label: 'Avanzado', descripcion: 'Desarrolla aplicaciones complejas.'}] }
    ]
  },
  {
    id: 'area4',
    label: 'Área 4: Seguridad',
    children: [
        { id: '4.1', label: '🛡️ Protección de dispositivos', descripcion: 'Proteger los dispositivos y el contenido digital propio.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Usa contraseñas y antivirus básicos.'}, {id: 'b', label: 'Intermedio', descripcion: 'Gestiona la seguridad de sus dispositivos. '}, {id: 'c', label: 'Avanzado', descripcion: 'Implementa políticas de seguridad.'}] },
        { id: '4.2', label: '🔒 Protección de datos', descripcion: 'Gestionar datos personales y proteger la privacidad.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Conoce los riesgos de compartir datos.'}, {id: 'b', label: 'Intermedio', descripcion: 'Configura la privacidad de sus cuentas. '}, {id: 'c', label: 'Avanzado', descripcion: 'Aplica técnicas avanzadas de protección.'}] },
        { id: '4.3', label: '❤️ Protección de la salud', descripcion: 'Evitar riesgos para la salud asociados al uso de la tecnología.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Conoce pautas de ergonomía y bienestar.'}, {id: 'b', label: 'Intermedio', descripcion: 'Aplica hábitos saludables de uso tecnológico. '}, {id: 'c', label: 'Avanzado', descripcion: 'Promueve activamente el bienestar digital.'}] },
        { id: '4.4', label: '♻️ Protección del entorno', descripcion: 'Ser consciente del impacto ambiental de las tecnologías.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Conoce el impacto del consumo tecnológico.'}, {id: 'b', label: 'Intermedio', descripcion: 'Adopta prácticas de consumo responsable. '}, {id: 'c', label: 'Avanzado', descripcion: 'Promueve la sostenibilidad digital.'}] }
    ]
  },
  {
    id: 'area5',
    label: 'Área 5: Resolución de problemas',
    children: [
        { id: '5.1', label: '🛠️ Resolución de problemas técnicos', descripcion: 'Identificar y solucionar problemas técnicos de hardware y software.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Soluciona problemas comunes con ayuda.'}, {id: 'b', label: 'Intermedio', descripcion: 'Resuelve problemas técnicos de forma autónoma. '}, {id: 'c', label: 'Avanzado', descripcion: 'Diagnostica y resuelve problemas complejos.'}] },
        { id: '5.2', label: '💡 Identificar necesidades', descripcion: 'Evaluar necesidades y seleccionar las herramientas digitales adecuadas.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Identifica herramientas para tareas simples.'}, {id: 'b', label: 'Intermedio', descripcion: 'Elige la herramienta adecuada para cada necesidad. '}, {id: 'c', label: 'Avanzado', descripcion: 'Evalúa y recomienda soluciones tecnológicas.'}] },
        { id: '5.3', label: '🚀 Uso creativo de la tecnología', descripcion: 'Utilizar la tecnología para innovar y crear soluciones.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Usa la tecnología de forma creativa en tareas guiadas.'}, {id: 'b', label: 'Intermedio', descripcion: 'Crea soluciones innovadoras a problemas. '}, {id: 'c', label: 'Avanzado', descripcion: 'Lidera proyectos de innovación tecnológica.'}] },
        { id: '5.4', label: '🧠 Identificar lagunas', descripcion: 'Ser consciente de las áreas de mejora en la propia competencia digital.', niveles: [{id: 'a', label: 'Básico', descripcion: 'Reconoce sus limitaciones digitales.'}, {id: 'b', label: 'Intermedio', descripcion: 'Busca activamente cómo mejorar su competencia. '}, {id: 'c', label: 'Avanzado', descripcion: 'Desarrolla planes de formación para sí mismo y otros.'}] }
    ]
  }
];