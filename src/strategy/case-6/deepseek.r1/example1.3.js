//3
// TaskModule.js
export class PendingStrategy {
  render(data) {
    return `
      <div class="task-card pending">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <span>Status: ${data.status || 'Pending'} ⌛</span>
        ${data.dueDate ? `<time>Due: ${data.dueDate}</time>` : ''}
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
        <div class="progress-container">
          <span>Status: ${data.status || 'In Progress'} 🚧</span>
          ${data.progress ? `<progress value="${data.progress}" max="100"></progress>` : ''}
        </div>
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
        <div class="completion-details">
          <span>Status: ${data.status || 'Completed'} ✅</span>
          ${data.completedDate ? `<time>Completed on: ${data.completedDate}</time>` : ''}
        </div>
      </div>
    `;
  }
}

export class TaskCard {
  constructor(strategy = new PendingStrategy(), data = {}) {
    this.strategy = strategy;
    this.data = data;
  }

  updateData(newData) {
    this.data = { ...this.data, ...newData };
  }

  setStrategy(newStrategy) {
    if (!newStrategy.render) {
      throw new Error('Invalid strategy: must implement render() method');
    }
    this.strategy = newStrategy;
  }

  render() {
    try {
      return this.strategy.render(this.data);
    } catch (error) {
      console.error('Render error:', error);
      return '<div class="task-card error">⚠️ Error rendering task</div>';
    }
  }
}