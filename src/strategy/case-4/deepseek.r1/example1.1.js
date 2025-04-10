//1
// notification.js
export class SuccessStrategy {
  renderNotification(data) {
    return `<div style="background-color: #4CAF50; color: white; padding: 10px; border-radius: 5px; margin: 10px;">${data.message}</div>`;
  }
}

export class ErrorStrategy {
  renderNotification(data) {
    return `<div style="background-color: #f44336; color: white; padding: 10px; border-radius: 5px; margin: 10px;">${data.message}</div>`;
  }
}

export class WarningStrategy {
  renderNotification(data) {
    return `<div style="background-color: #ffeb3b; color: black; padding: 10px; border-radius: 5px; margin: 10px;">${data.message}</div>`;
  }
}

export class Notification {
  constructor(strategy) {
    this.strategy = strategy;
  }

  send(data) {
    const notificationElement = this.strategy.renderNotification(data);
    
    // Simulación de aplicación en tiempo real
    if (typeof document !== 'undefined') {
      const container = document.createElement('div');
      container.innerHTML = notificationElement;
      document.body.appendChild(container);
    }
    
    return notificationElement;
  }
}
