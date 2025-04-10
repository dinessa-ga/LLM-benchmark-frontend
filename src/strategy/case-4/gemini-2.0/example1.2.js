// 2
// notification.js

// Strategies
export class SuccessStrategy {
  constructor(style = { backgroundColor: 'green', color: 'white' }) {
    this.style = style;
  }

  renderNotification(data) {
    return this.#createNotificationElement('Success', data, this.style);
  }

  setStyle(newStyle) {
    this.style = { ...this.style, ...newStyle }; // Merge styles
  }

  #createNotificationElement(type, data, style) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification', 'notification--success'); // Base classes
    notificationElement.textContent = `${type}: ${data}`;
    Object.assign(notificationElement.style, style);
    return notificationElement;
  }
}

export class ErrorStrategy {
  constructor(style = { backgroundColor: 'red', color: 'white' }) {
    this.style = style;
  }

  renderNotification(data) {
    return this.#createNotificationElement('Error', data, this.style);
  }

  setStyle(newStyle) {
    this.style = { ...this.style, ...newStyle }; // Merge styles
  }

  #createNotificationElement(type, data, style) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification', 'notification--error'); // Base classes
    notificationElement.textContent = `${type}: ${data}`;
    Object.assign(notificationElement.style, style);
    return notificationElement;
  }
}

export class WarningStrategy {
  constructor(style = { backgroundColor: 'yellow', color: 'black' }) {
    this.style = style;
  }

  renderNotification(data) {
    return this.#createNotificationElement('Warning', data, this.style);
  }

  setStyle(newStyle) {
    this.style = { ...this.style, ...newStyle }; // Merge styles
  }

  #createNotificationElement(type, data, style) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification', 'notification--warning'); // Base classes
    notificationElement.textContent = `${type}: ${data}`;
    Object.assign(notificationElement.style, style);
    return notificationElement;
  }
}

// Notification Class
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
    if (this.strategy && this.strategy.setStyle) {
      this.strategy.setStyle(newStyle);
    }
  }
}