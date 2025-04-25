//1
// ...existing code...
export class VisualStrategy {
  renderContent(data) {
    return `Mostrando contenido visual: ${data}`
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `Reproduciendo audio: ${data}`
  }
}

export class ReadingStrategy {
  renderContent(data) {
    return `Mostrando texto: ${data}`
  }
}

export class LearningModule {
  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  showContent(data) {
    return this.strategy.renderContent(data)
  }
}
