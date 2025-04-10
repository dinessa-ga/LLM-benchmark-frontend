// 2
// TaskModule.js
export class PendingStrategy {
  render(data) {
    return `
      <div class="task-card pending">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <span>Status: ${data.status || 'Pending'} ⌛</span>
      </div>
    `;
  }
}

export class InProgressStrategy {
  render(data) {
    return `
      <div class="task-card in-progress">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <span>Status: ${data.status || 'In Progress'} 🚧</span>
      </div>
    `;
  }
}

export class CompletedStrategy {
  render(data) {
    return `
      <div class="task-card completed">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <span>Status: ${data.status || 'Completed'} ✅</span>
      </div>
    `;
  }
}

export class TaskCard {
  constructor(strategy, data = {}) {
    this.strategy = strategy;
    this.data = data;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  render() {
    if (!this.strategy?.render) {
      throw new Error('Estrategia no válida: método render() no implementado');
    }
    return this.strategy.render(this.data);
  }
}