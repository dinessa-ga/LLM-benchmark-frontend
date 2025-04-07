// 2
// metrics.js

/**
 * Metric class that notifies observers when updated
 */
class Metric {
  constructor(name) {
    this.name = name;
    this.value = null;
    this.observers = [];
  }

  /**
   * Subscribe a manager to this metric
   * @param {Manager} manager - The manager to subscribe
   */
  subscribe(manager) {
    if (!this.observers.includes(manager)) {
      this.observers.push(manager);
    }
    return this; // Enable method chaining
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
    return this; // Enable method chaining
  }

  /**
   * Update the metric value and notify all observers
   * @param {*} value - The new value
   */
  update(value) {
    this.value = value;
    this.notifyObservers();
    return this; // Enable method chaining
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
 * Manager class that receives metric updates
 */
class Manager {
  constructor(name) {
    this.name = name;
    this.metrics = new Map(); // Store the latest values of metrics
  }

  /**
   * Handle metric updates
   * @param {Metric} metric - The metric that was updated
   * @param {*} value - The new value
   */
  update(metric, value) {
    this.metrics.set(metric.name, value);
    console.log(`Manager ${this.name} received update: ${metric.name} = ${value}`);
    // Custom logic can be implemented here
  }
  
  /**
   * Get the latest value of a metric
   * @param {string} metricName - The name of the metric
   * @returns {*} The value of the metric or undefined if not found
   */
  getMetricValue(metricName) {
    return this.metrics.get(metricName);
  }
}

export { Metric, Manager };