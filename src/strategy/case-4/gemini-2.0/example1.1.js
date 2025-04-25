//1
// strategies.js
export class SuccessStrategy {
  constructor(style) {
    this.style = style || { backgroundColor: 'green', color: 'white' };
  }

  renderNotification(data) {
    const notificationElement = document.createElement('div');
    notificationElement.textContent = `Success: ${data}`;
    Object.assign(notificationElement.style, this.style); // Apply style
    return notificationElement;
  }

  setStyle(newStyle) {
    this.style = newStyle;
  }
}

export class ErrorStrategy {
  constructor(style) {
    this.style = style || { backgroundColor: 'red', color: 'white' };
  }

  renderNotification(data) {
    const notificationElement = document.createElement('div');
    notificationElement.textContent = `Error: ${data}`;
    Object.assign(notificationElement.style, this.style); // Apply style
    return notificationElement;
  }

  setStyle(newStyle) {
    this.style = newStyle;
  }
}

export class WarningStrategy {
  constructor(style) {
    this.style = style || { backgroundColor: 'yellow', color: 'black' };
  }

  renderNotification(data) {
    const notificationElement = document.createElement('div');
    notificationElement.textContent = `Warning: ${data}`;
    Object.assign(notificationElement.style, this.style); // Apply style
    return notificationElement;
  }

  setStyle(newStyle) {
    this.style = newStyle;
  }
}

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
