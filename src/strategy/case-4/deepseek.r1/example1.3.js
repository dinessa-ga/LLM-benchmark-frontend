//3
// notification.js
export class SuccessStrategy {
  renderNotification(data) {
    return `
      <div class="notification" style="
        background: #d4edda;
        color: #155724;
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #c3e6cb;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" style="fill: #155724">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        ${data.message}
      </div>
    `;
  }
}

export class ErrorStrategy {
  renderNotification(data) {
    return `
      <div class="notification" style="
        background: #f8d7da;
        color: #721c24;
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #f5c6cb;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" style="fill: #721c24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        ${data.message}
      </div>
    `;
  }
}

export class WarningStrategy {
  renderNotification(data) {
    return `
      <div class="notification" style="
        background: #fff3cd;
        color: #856404;
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ffeeba;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" style="fill: #856404">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        ${data.message}
      </div>
    `;
  }
}

export class Notification {
  constructor() {
    this.strategy = null;
    this.container = typeof document !== 'undefined' ? 
      document.createElement('div') : null;
    
    if (this.container) {
      this.container.style.position = 'fixed';
      this.container.style.top = '20px';
      this.container.style.right = '20px';
      this.container.style.zIndex = '1000';
      document.body.appendChild(this.container);
    }
  }

  setStrategy(strategy) {
    this.strategy = strategy;
    return this;
  }

  send(data) {
    if (!this.strategy) throw new Error('No strategy defined');
    
    const notification = this.strategy.renderNotification(data);
    
    if (this.container) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = notification;
      this.container.appendChild(tempDiv);
      
      setTimeout(() => {
        tempDiv.remove();
      }, data.duration || 5000);
    }
    
    return notification;
  }
}