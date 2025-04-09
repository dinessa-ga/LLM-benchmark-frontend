//3
// metric.js
class Metric {
  constructor() {
    this.value = null;
    this.observers = new Set();
  }

  subscribe(manager) {
    if (typeof manager.update !== 'function') {
      throw new Error("Manager must have an 'update' method.");
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

// Example Manager (for demonstration purposes)
class Manager {
    constructor(name) {
        this.name = name;
    }

    update(value) {
        console.log(`${this.name} received update: ${value}`);
    }
}


// Example usage (within the same file for demonstration, but usually in a separate file)
if (typeof window === 'undefined') { // Check if running in Node.js (not browser)

    const metric = new Metric();
    const manager1 = new Manager('Manager 1');
    const manager2 = new Manager('Manager 2');

    metric.subscribe(manager1);
    metric.subscribe(manager2);

    metric.update(10);
    metric.update(20);

    metric.unsubscribe(manager2);

    metric.update(30);
}



export { Metric };