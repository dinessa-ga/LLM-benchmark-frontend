//1
// Clase User
class User {
  constructor(name) {
    this.name = name;
  }

  update(productName, newPrice) {
    console.log(`${this.name} se entera de que ${productName} cuesta ahora $${newPrice}`);
  }
}

// Clase Product
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
    this.subscribers.forEach((user) => user.update(this.name, newPrice));
  }
}

export { Product, User };
