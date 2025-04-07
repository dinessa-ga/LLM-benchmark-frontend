//1
// learning-module.js

// Interfaz para las estrategias de aprendizaje
export class LearningStrategy {
  renderContent(data) {
    throw new Error('El método renderContent debe ser implementado por las subclases');
  }
}

// Estrategia para aprendizaje visual
export class VisualStrategy extends LearningStrategy {
  renderContent(data) {
    console.log('Renderizando contenido en formato visual:');
    console.log(`Título: ${data.title}`);
    console.log('Contenido visual con diagramas, imágenes y mapas conceptuales');
    
    // Aquí iría la lógica específica para renderizar contenido visual
    return `
      <div class="visual-content">
        <h2>${data.title}</h2>
        <div class="diagram">${data.visualContent || 'No hay contenido visual disponible'}</div>
        <div class="infographic">${data.infographics || 'No hay infografías disponibles'}</div>
      </div>
    `;
  }
}

// Estrategia para aprendizaje auditivo
export class AuditoryStrategy extends LearningStrategy {
  renderContent(data) {
    console.log('Renderizando contenido en formato auditivo:');
    console.log(`Título: ${data.title}`);
    console.log('Contenido auditivo con narraciones, explicaciones verbales y discusiones');
    
    // Aquí iría la lógica específica para renderizar contenido auditivo
    return `
      <div class="auditory-content">
        <h2>${data.title}</h2>
        <div class="audio-player">${data.audioContent || 'No hay contenido auditivo disponible'}</div>
        <div class="transcript">${data.transcript || 'No hay transcripción disponible'}</div>
      </div>
    `;
  }
}

// Estrategia para aprendizaje mediante lectura
export class ReadingStrategy extends LearningStrategy {
  renderContent(data) {
    console.log('Renderizando contenido en formato de lectura:');
    console.log(`Título: ${data.title}`);
    console.log('Contenido textual con explicaciones detalladas, ejemplos y referencias');
    
    // Aquí iría la lógica específica para renderizar contenido de lectura
    return `
      <div class="reading-content">
        <h2>${data.title}</h2>
        <div class="text-content">${data.textContent || 'No hay contenido textual disponible'}</div>
        <div class="examples">${data.examples || 'No hay ejemplos disponibles'}</div>
        <div class="references">${data.references || 'No hay referencias disponibles'}</div>
      </div>
    `;
  }
}

// Clase principal que utiliza las estrategias
export class LearningModule {
  constructor(strategy = null) {
    this.strategy = strategy;
    this.content = null;
  }

  // Método para cambiar la estrategia en tiempo de ejecución
  setStrategy(strategy) {
    if (!(strategy instanceof LearningStrategy)) {
      throw new Error('La estrategia debe implementar la interfaz LearningStrategy');
    }
    this.strategy = strategy;
    return this; // Permite encadenamiento de métodos
  }

  // Método para establecer el contenido
  setContent(content) {
    this.content = content;
    return this; // Permite encadenamiento de métodos
  }

  // Método para renderizar el contenido usando la estrategia actual
  render() {
    if (!this.strategy) {
      throw new Error('Debe establecer una estrategia antes de renderizar el contenido');
    }
    
    if (!this.content) {
      throw new Error('Debe establecer el contenido antes de renderizar');
    }
    
    return this.strategy.renderContent(this.content);
  }
}

// Ejemplo de uso:
// import { LearningModule, VisualStrategy, AuditoryStrategy, ReadingStrategy } from './learning-module.js';
// 
// const module = new LearningModule();
// const content = {
//   title: "Introducción a JavaScript",
//   visualContent: "<img src='js-diagram.png'>",
//   audioContent: "<audio src='js-intro.mp3'>",
//   textContent: "JavaScript es un lenguaje de programación interpretado..."
// };
// 
// // Usar estrategia visual
// module.setStrategy(new VisualStrategy()).setContent(content);
// const visualOutput = module.render();
// 
// // Cambiar a estrategia auditiva
// module.setStrategy(new AuditoryStrategy());
// const auditoryOutput = module.render();
// 
// // Cambiar a estrategia de lectura
// module.setStrategy(new ReadingStrategy());
// const readingOutput = module.render();
