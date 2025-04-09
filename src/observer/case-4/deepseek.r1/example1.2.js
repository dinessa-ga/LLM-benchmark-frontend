// 2
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
    const previousStock = this.stock;
    this.stock = quantity;
    
    if (previousStock === 0 && this.stock > 0) {
      this.notifyObservers();
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name}: ¡Producto disponible! Stock actualizado.`);
  }
}
