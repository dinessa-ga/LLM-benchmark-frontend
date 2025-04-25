//3
// taskCard.js
export class PendingStrategy {
  render(data) {
    return `<div class="task-card pending">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>Status: Pending</p>
            </div>`;
  }
}

export class InProgressStrategy {
  render(data) {
    return `<div class="task-card in-progress">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>Status: In Progress</p>
            </div>`;
  }
}

export class CompletedStrategy {
  render(data) {
    return `<div class="task-card completed">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>Status: Completed</p>
            </div>`;
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