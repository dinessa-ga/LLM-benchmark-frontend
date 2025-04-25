//1
export class Metric {
  constructor() {
    this.observers = [];
  }

  subscribe(manager) {
    this.observers.push(manager);
  }

  update(value) {
    for (const observer of this.observers) {
      observer.update(value);
    }
  }
}

export class Manager {
  update(value) {
    console.log(`Manager recibió: ${value}`);
  }
}