//1
// metric-manager.js

/**
 * Observer interface
 */
class Observer {
  update(metric, value) {
    throw new Error("Method 'update' must be implemented.");
  }
}

/**
 * Metric class that acts as the Subject in the Observer pattern
 */
class Metric {
  constructor(name) {
    this.name = name;
    this.value = null;
    this.observers = [];
  }

  /**
   * Subscribe a manager (observer) to this metric
   * @param {Manager} manager - The manager to subscribe
   */
  subscribe(manager) {
    if (!this.observers.includes(manager)) {
      this.observers.push(manager);
    }
  }

  /**
   * Unsubscribe a manager from this metric
   * @param {Manager} manager - The manager to unsubscribe
   */
  unsubscribe(manager) {
    const index = this.observers.indexOf(manager);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Update the metric value and notify all observers
   * @param {*} value - The new value
   */
  update(value) {
    this.value = value;
    this.notifyObservers();
  }

  /**
   * Notify all observers about the value change
   */
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this, this.value);
    }
  }
}

/**
 * Manager class that implements the Observer interface
 */
class Manager extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  /**
   * Update method that gets called when observed metrics change
   * @param {Metric} metric - The metric that changed
   * @param {*} value - The new value
   */
  update(metric, value) {
    console.log(`Manager ${this.name} received update: Metric ${metric.name} changed to ${value}`);
    // Handle the metric update (implement specific logic here)
  }
}

export { Metric, Manager };
