// 2
// learningModule.js
export class VisualStrategy {
  renderContent(data) {
    return `<img src="${data.imageUrl}" alt="${data.altText}">`;
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `<audio controls><source src="${data.audioUrl}" type="audio/mpeg"></audio>`;
  }
}

export class ReadingStrategy {
  renderContent(data) {
    return `<p>${data.text}</p>`;
  }
}

export class LearningModule {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  render(data) {
    return this.strategy.renderContent(data);
  }
}