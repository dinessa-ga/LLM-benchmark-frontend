//1
// metric.js
class Metric {
  constructor() {
    this.observers = [];
  }

  subscribe(manager) {
    if (!this.observers.includes(manager)) {
      this.observers.push(manager);
    }
  }

  update(value) {
    this.observers.forEach(observer => {
      observer.update(value);
    });
  }
}

class Manager {
  update(value) {
    console.log(`Valor actualizado: ${value}`);
  }
}

export { Metric, Manager };
