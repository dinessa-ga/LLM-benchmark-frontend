//3
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
    this.stock = quantity > 0 ? quantity : 0;
    
    if (previousStock === 0 && this.stock > 0) {
      this.notifyObservers();
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.stock));
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(stock) {
    console.log(`${this.name}: ¡Producto disponible! (${stock} unidades en stock)`);
  }
}