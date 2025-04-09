//3
// learning-module.js

// Estrategias de aprendizaje
export class VisualStrategy {
  renderContent(data) {
    return `🎨 Visual: ${data} [Gráficos interactivos]`;
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `🎧 Audio: ${data} [Podcast educativo]`;
  }
}

export class ReadingStrategy {
  renderContent(data) {
    return `📚 Lectura: ${data} [Material de estudio]`;
  }
}

// Clase principal del módulo de aprendizaje
export class LearningModule {
  constructor(strategy = new ReadingStrategy()) {
    this.currentStrategy = strategy;
  }

  // Cambiar estrategia dinámicamente con validación
  setStrategy(strategy) {
    if (typeof strategy.renderContent !== 'function') {
      throw new Error('Estrategia inválida: debe implementar renderContent()');
    }
    this.currentStrategy = strategy;
  }

  // Renderizar contenido según estrategia actual
  displayContent(content) {
    return this.currentStrategy.renderContent(content);
  }
}

// Exportación principal para conveniencia
export default {
  LearningModule,
  VisualStrategy,
  AuditoryStrategy,
  ReadingStrategy
};

/* Ejemplo de uso:
import { LearningModule, AuditoryStrategy } from './learning-module.js';

const learningSession = new LearningModule();
console.log(learningSession.displayContent("Historia del Arte")); 

learningSession.setStrategy(new AuditoryStrategy());
console.log(learningSession.displayContent("Compositores Clásicos"));
*/