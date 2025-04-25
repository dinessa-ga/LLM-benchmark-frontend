//3
export class Metric {
  constructor() {
    this.observers = [];
  }

  subscribe(manager) {
    this.observers.push(manager);
  }

  update(value) {
    this.observers.forEach((observer) => observer.update(value));
  }
}

export class Manager {
  update(value) {
    console.log(`Manager recibió: ${value}`);
  }
}