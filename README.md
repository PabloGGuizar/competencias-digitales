# Creación de un Mapa Conceptual Interactivo con React y React Flow

Este documento describe el proceso de desarrollo de un mapa conceptual interactivo para visualizar el **Marco de Competencias Digitales**. La aplicación fue creada con **React** y la librería **React Flow** para renderizar los nodos y las conexiones de forma dinámica y estética.

## 🚀 Tecnologías Utilizadas

-   **React.js**: Biblioteca principal para construir la interfaz de usuario y gestionar el estado.
-   **React Flow**: Una potente librería para crear aplicaciones basadas en nodos, perfecta para mapas conceptuales, diagramas de flujo y editores visuales.
-   **JavaScript (ES6+)**: Lenguaje de programación base para la lógica de la aplicación.
-   **CSS3**: Para dar estilo y diseño a los componentes, incluyendo los nodos, las conexiones y el modal interactivo.
-   **Vite**: Entorno de desarrollo rápido para proyectos web modernos.

---

## 📂 Estructura del Proyecto

El proyecto se organizó en los siguientes archivos clave para separar responsabilidades y facilitar el mantenimiento:

-   **`main.jsx`**: Punto de entrada de la aplicación. Renderiza el componente principal `App` en el DOM.
-   **`App.jsx`**: Componente raíz que estructura la página. Contiene el título principal, la instrucción para el usuario y renderiza el componente `MapaConceptual`.
-   **`src/components/MapaConceptual.jsx`**: El corazón de la aplicación. Contiene toda la lógica para calcular la posición de los nodos, definir las conexiones y renderizar el mapa con React Flow.
-   **`src/components/ModalCompetencia.jsx`**: Un componente reutilizable que muestra una ventana emergente (modal) con la descripción y los niveles de desempeño de una competencia seleccionada.
-   **`src/data/competencias.js`**: Un archivo JavaScript que exporta un array con todos los datos del mapa (áreas, competencias, descripciones y niveles). Esto permite separar los datos de la lógica de presentación.
-   **Archivos `.css`**: Se utilizaron varios archivos CSS para estilizar los diferentes componentes (`App.css`, `MapaConceptual.css`, `ModalCompetencia.css`), manteniendo el código de estilos organizado y modular.

---

## 🛠️ Pasos de Implementación

### 1. Definición de los Datos (`competencias.js`)

El primer paso fue estructurar la información. Se creó un array de objetos donde cada objeto representa una de las **5 áreas** del marco. A su vez, cada área contiene un array `children` con las competencias específicas, cada una con su descripción y sus niveles de desempeño.

```javascript
// Ejemplo de la estructura de datos en competencias.js
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
          { id: 'c', label: 'Avanzado', descripcion: 'Diseña y enseña estrategias de búsqueda.' }
        ]
      },
      // ... más competencias
    ]
  },
  // ... más áreas
];
```

### 2. Lógica del Mapa y Distribución de Nodos (`MapaConceptual.jsx`)

Este componente es el más complejo. Su lógica principal se puede dividir en:

-   **Cálculo de Posiciones**: Se utilizó el hook `useMemo` para calcular las posiciones de los nodos (`nodes`) y las conexiones (`edges`) de manera eficiente. Esto evita recálculos innecesarios en cada renderizado, optimizando el rendimiento.
-   **Algoritmo de Distribución**: Para evitar la superposición de las tarjetas, se implementó un algoritmo que:
    1.  Coloca un **nodo raíz** ("Competencias Digitales") en el centro del lienzo.
    2.  Calcula el ancho que ocupará cada "rama" (cada área con sus competencias hijas).
    3.  Distribuye las ramas de forma **alternada arriba y abajo** del nodo central, dejando un espacio (`branchGap`) entre ellas para asegurar que no se solapen.
    4.  Posiciona los nodos de las competencias debajo (o encima) de su área correspondiente de forma ordenada.
-   **Renderizado con React Flow**: El componente retorna el componente `<ReactFlow />`, pasándole los `nodes` y `edges` calculados. También se incluyen componentes hijos como `<MiniMap />`, `<Controls />` y `<Background />` para mejorar la usabilidad del mapa.

### 3. Interactividad: El Modal de Información

Para mostrar la información detallada sin saturar el mapa, se implementó un sistema de modal:

1.  **Estado del Modal**: Se usó el hook `useState` en `MapaConceptual.jsx` para guardar la información de la competencia seleccionada (`modalInfo`). Si su valor es `null`, el modal está oculto.
2.  **Evento `onClick`**: A cada nodo de competencia se le asignó un evento `onClick` que llama a la función `handleOpenModal`. Esta función busca la información completa de la competencia en el archivo de datos y la guarda en el estado, haciendo visible el modal.
3.  **Componente `ModalCompetencia.jsx`**: Este componente recibe los datos de la competencia como `props` y los muestra de forma ordenada. Se le añadieron validaciones para no "romper" la aplicación si los datos de `niveles` no están presentes. Incluye un `useEffect` para cerrarse si el usuario presiona la tecla "Escape".

### 4. Estilo y Acabados Finales

-   **Estilos CSS**: Se crearon clases específicas para cada tipo de nodo (`.nodo-central`, `.nodo-area`, `.nodo-competencia-hijo`) para darles un aspecto único y jerárquico. El modal y sus tarjetas de niveles también recibieron estilos personalizados para una mejor visualización.
-   **Cursor de Puntero**: Se añadió `cursor: pointer;` a los nodos de competencia para indicar visualmente que son elementos clicables, mejorando la experiencia de usuario.
-   **Líneas Animadas y Punteadas**: Las líneas que conectan el nodo central con las áreas se configuraron con `animated: true` y un estilo de línea punteada (`strokeDasharray`) para darles un toque dinámico y diferenciarlas de las otras conexiones.
-   **Título Fijo**: Se ajustó la estructura en `App.jsx` y se usó CSS Flexbox para crear un cabezal fijo con el título y la instrucción, asegurando que el mapa conceptual ocupe el espacio restante sin cubrir el texto.
