// 2
// metric.js
export class Metric {
  constructor() {
    this._observers = new Set();
  }

  subscribe(manager) {
    if (!manager.update) {
      throw new Error('Manager must implement an update method');
    }
    this._observers.add(manager);
  }

  unsubscribe(manager) {
    this._observers.delete(manager);
  }

  update(value) {
    for (const observer of this._observers) {
      observer.update(value);
    }
  }
}

export class Manager {
  constructor(name = 'AnonymousManager') {
    this.name = name;
  }

  update(value) {
    console.log(`[${this.name}] Received update:`, value);
  }
}
