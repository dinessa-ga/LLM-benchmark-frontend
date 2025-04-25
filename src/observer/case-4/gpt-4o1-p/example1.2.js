// 2
// ...existing code...
class StoreProduct {
  constructor() {
    this.observers = [];
    this.stock = 0;
  }

  subscribe(user) {
    this.observers.push(user);
  }

  updateStock(quantity) {
    this.stock += quantity;
    if (this.stock > 0) {
      this.observers.forEach(user => user.update(this.stock));
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(stock) {
    console.log(`User ${this.name} notified: Product is back with stock = ${stock}`);
  }
}

export { StoreProduct, User };
// ...existing code...