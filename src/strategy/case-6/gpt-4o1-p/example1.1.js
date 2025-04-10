//1
export class PendingStrategy {
  render(data) {
    return `Tarea pendiente: ${data}`;
  }
}

export class InProgressStrategy {
  render(data) {
    return `Tarea en progreso: ${data}`;
  }
}

export class CompletedStrategy {
  render(data) {
    return `Tarea completada: ${data}`;
  }
}

export class TaskCard {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  render(data) {
    return this.strategy.render(data);
  }
}
