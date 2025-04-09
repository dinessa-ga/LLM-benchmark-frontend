//3
// learning_module.js

export class VisualStrategy {
  renderContent(data) {
    return `<img src="${data.url}" alt="${data.description}">`;
  }
}

export class AuditoryStrategy {
  renderContent(data) {
    return `<audio controls src="${data.url}"></audio>`;
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