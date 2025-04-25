//3
// product.js
export class Product {
  constructor(name, initialPrice) {
    this.name = name;
    this.price = initialPrice;
    this.observers = new Set();
  }

  subscribe(user) {
    this.observers.add(user);
  }

  unsubscribe(user) {
    this.observers.delete(user);
  }

  getPrice() {
      return this.price;
  }


  setPrice(price) {
    if (price !== this.price) {
      this.price = price;
      this.notifyObservers();
    }
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this);
    });
  }
}


export class User {
    constructor(name) {
        this.name = name;
    }

    update(product) {
        console.log(`${this.name}: El precio de ${product.name} ha cambiado a ${product.price}`);
    }
}


// Ejemplo de uso (puedes incluirlo en el mismo archivo o en otro)
if (import.meta.url === import.meta.main) {
  // Este bloque solo se ejecuta si el archivo se ejecuta directly, not when imported.

  const product = new Product("Camiseta", 20);
  const user1 = new User("Alice");
  const user2 = new User("Bob");

  product.subscribe(user1);
  product.subscribe(user2);

  product.setPrice(25); // Notifica a Alice y Bob
  product.setPrice(25); // No notifica, el precio no cambia
  product.unsubscribe(user2);
  product.setPrice(30); // Solo notifica a Alice
  console.log(`Precio actual: ${product.getPrice()}`);
}