// 2
// learning-module.js

// Definición de las estrategias
export class VisualStrategy {
  renderContent(data) {
    return `📊 Visualizando: ${data}`;
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `🔊 Reproduciendo audio: ${data}`;
  }
}

export class ReadingStrategy {
  renderContent(data) {
    return `📖 Mostrando texto: ${data}`;
  }
}

// Clase principal que gestiona las estrategias
export class LearningModule {
  constructor(strategy = new ReadingStrategy()) {
    this.currentStrategy = strategy;
  }

  // Método para cambiar la estrategia dinámicamente
  setStrategy(strategy) {
    if (!strategy.renderContent) {
      throw new Error("La estrategia debe implementar renderContent()");
    }
    this.currentStrategy = strategy;
  }

  // Ejecuta la estrategia actual
  renderContent(data) {
    return this.currentStrategy.renderContent(data);
  }
}

// Exportación alternativa para conveniencia
export default {
  LearningModule,
  VisualStrategy,
  AuditoryStrategy,
  ReadingStrategy
};
