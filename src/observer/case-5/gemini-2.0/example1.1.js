//1
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


// Ejemplo de uso (no incluido en el modulo exportado)
/*
// manager.js (archivo separado para el ejemplo)

import { Metric } from './metric.js';

class Manager {
  constructor(name) {
    this.name = name;
    this.lastValue = null;
  }

  update(value) {
    this.lastValue = value;
    console.log(`${this.name}: Valor actualizado a ${value}`);
  }
}


// main.js (archivo separado para el ejemplo)
import { Metric } from './metric.js';
import { Manager } from './manager.js';

const metric = new Metric();

const manager1 = new Manager("Manager 1");
const manager2 = new Manager("Manager 2");

metric.subscribe(manager1);
metric.subscribe(manager2);

metric.update(10);
metric.update(20);

metric.unsubscribe(manager2);

metric.update(30);


// Salida esperada:
// Manager 1: Valor actualizado a 10
// Manager 2: Valor actualizado a 10
// Manager 1: Valor actualizado a 20
// Manager 2: Valor actualizado a 20
// Manager 1: Valor actualizado a 30
*/

