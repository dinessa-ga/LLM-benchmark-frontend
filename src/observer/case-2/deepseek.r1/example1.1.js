//1
// product.js
export class Product {
  constructor() {
    this.price = 0;
    this.subscribers = [];
  }

  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
    }
  }

  setPrice(newPrice) {
    if (this.price !== newPrice) {
      this.price = newPrice;
      this.notify();
    }
  }

  notify() {
    this.subscribers.forEach(user => user.update(this.price));
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(newPrice) {
    console.log(`${this.name} recibió notificación: Nuevo precio es $${newPrice}`);
  }
}

