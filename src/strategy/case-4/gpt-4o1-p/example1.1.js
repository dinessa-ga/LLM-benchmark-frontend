//1
// Clase base para las estrategias
class Strategy {
  constructor(defaultStyle = {}) {
    this.style = { ...defaultStyle };
  }

  setStyle(newStyle) {
    this.style = { ...this.style, ...newStyle };
  }

  renderNotification(data) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification');
    Object.assign(notificationElement.style, this.style);
    return notificationElement;
  }
}

// Estrategias concretas
export class SuccessStrategy extends Strategy {
  constructor(style = { backgroundColor: 'green', color: 'white' }) {
    super(style);
  }

  renderNotification(data) {
    const element = super.renderNotification(data);
    element.classList.add('notification-success');
    element.textContent = `Success: ${data}`;
    return element;
  }
}

export class ErrorStrategy extends Strategy {
  constructor(style = { backgroundColor: 'red', color: 'white' }) {
    super(style);
  }

  renderNotification(data) {
    const element = super.renderNotification(data);
    element.classList.add('notification-error');
    element.textContent = `Error: ${data}`;
    return element;
  }
}

export class WarningStrategy extends Strategy {
  constructor(style = { backgroundColor: 'yellow', color: 'black' }) {
    super(style);
  }

  renderNotification(data) {
    const element = super.renderNotification(data);
    element.classList.add('notification-warning');
    element.textContent = `Warning: ${data}`;
    return element;
  }
}

// Clase Notification que usa las estrategias
export class Notification {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  showNotification(data) {
    return this.strategy.renderNotification(data);
  }

  setStyle(newStyle) {
    this.strategy.setStyle(newStyle);
  }
}
