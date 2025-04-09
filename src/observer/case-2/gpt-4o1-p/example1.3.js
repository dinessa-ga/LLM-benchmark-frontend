//3
class User {
  constructor(name) {
    this.name = name;
  }

  update(productName, newPrice) {
    console.log(`${this.name} se enteró de que "${productName}" ahora cuesta $${newPrice}`);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  setPrice(newPrice) {
    this.price = newPrice;
    this.subscribers.forEach(subscriber => subscriber.update(this.name, newPrice));
  }
}

export { Product, User };