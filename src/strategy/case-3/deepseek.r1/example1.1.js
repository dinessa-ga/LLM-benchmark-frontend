//1
// Estrategias
export class VisualStrategy {
  renderContent(data) {
    return `Mostrando contenido visual: ${data}`;
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `Reproduciendo contenido auditivo: ${data}`;
  }
}

export class ReadingStrategy {
  renderContent(data) {
    return `Mostrando texto para lectura: ${data}`;
  }
}

// Módulo principal
export class LearningModule {
  constructor(strategy = new ReadingStrategy()) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  render(data) {
    return this.strategy.renderContent(data);
  }
}

// Exportación única de todas las clases
export default {
  LearningModule,
  VisualStrategy,
  AuditoryStrategy,
  ReadingStrategy
};

