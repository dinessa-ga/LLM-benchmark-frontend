//1
// taskCard.js
export class PendingStrategy {
  render(data) {
    return `<div class="task-card pending">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>Status: Pending</p>
              <button class="start-button" data-id="${data.id}">Start Task</button>
            </div>`;
  }
}

export class InProgressStrategy {
  render(data) {
    return `<div class="task-card in-progress">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>Status: In Progress</p>
              <button class="complete-button" data-id="${data.id}">Complete Task</button>
            </div>`;
  }
}

export class CompletedStrategy {
  render(data) {
    return `<div class="task-card completed">
              <h3>${data.title}</h3>
              <p>${data.description}</p>
              <p>Status: Completed</p>
              <p>Completed On: ${data.completedOn || 'N/A'}</p>
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

