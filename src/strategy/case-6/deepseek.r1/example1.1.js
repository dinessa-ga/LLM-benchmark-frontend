//1
// TaskModule.js

export class PendingStrategy {
  render(data) {
    return `
      <div class="task-card pending">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <span>Status: Pending ⌛</span>
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
        <span>Status: In Progress 🚧</span>
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
        <span>Status: Completed ✅</span>
      </div>
    `;
  }
}

export class TaskCard {
  constructor(strategy, data) {
    this.strategy = strategy;
    this.data = data;
  }

  render() {
    return this.strategy.render(this.data);
  }
}

