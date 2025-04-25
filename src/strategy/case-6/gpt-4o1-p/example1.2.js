// 2
export class PendingStrategy {
  render(data) {
    return `Pendiente: ${data}`;
  }
}

export class InProgressStrategy {
  render(data) {
    return `En progreso: ${data}`;
  }
}

export class CompletedStrategy {
  render(data) {
    return `Completada: ${data}`;
  }
}

export class TaskCard {
  constructor(strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  render(data) {
    return this.strategy.render(data);
  }
}