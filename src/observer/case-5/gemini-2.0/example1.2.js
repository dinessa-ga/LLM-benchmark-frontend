// 2
// metric.js
class Metric {
  constructor() {
    this.value = null;
    this.observers = new Set();
  }

  subscribe(manager) {
    if (typeof manager.update !== 'function') {
      throw new Error("El manager debe tener un método 'update'.");
    }
    this.observers.add(manager);
  }

  unsubscribe(manager) {
    this.observers.delete(manager);
  }

  update(value) {
    this.value = value;
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.value);
    });
  }
}


export { Metric };