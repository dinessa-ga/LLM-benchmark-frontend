//1
// storeProduct.js
export class StoreProduct {
  constructor() {
    this.observers = [];
    this.stock = 0;
  }

  subscribe(user) {
    if (!this.observers.includes(user)) {
      this.observers.push(user);
    }
  }

  updateStock(quantity) {
    this.stock = quantity;
    if (this.stock > 0) {
      this.observers.forEach(observer => observer.update());
    }
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name} recibió una notificación: Hay stock disponible.`);
  }
}

