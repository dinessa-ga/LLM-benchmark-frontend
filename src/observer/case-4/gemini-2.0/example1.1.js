//1
// store-product.js
export class StoreProduct {
  constructor(name, price, initialStock = 0) {
    this.name = name;
    this.price = price;
    this.stock = initialStock;
    this.observers = []; // Lista de usuarios suscritos
  }

  subscribe(user) {
    if (typeof user.update !== 'function') {
      throw new Error("El usuario debe tener un método 'update'.");
    }

    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} se ha suscrito a las notificaciones de ${this.name}.`);
    } else {
      console.log(`${user.name} ya está suscrito a las notificaciones de ${this.name}.`);
    }
  }

  unsubscribe(user) {
    this.observers = this.observers.filter(observer => observer !== user);
    console.log(`${user.name} se ha desuscrito de las notificaciones de ${this.name}.`);
  }


  updateStock(quantity) {
    const oldStock = this.stock;
    this.stock = Math.max(0, this.stock + quantity); // Evita stock negativo
    const stockChange = this.stock - oldStock;

    if (stockChange > 0) {
      console.log(`${this.name}: Stock actualizado a ${this.stock}.  Notificando a los usuarios suscritos...`);
      this.notifyObservers(stockChange);
    } else if (stockChange < 0) {
      console.log(`${this.name}: Stock actualizado a ${this.stock}.`); // No notifica por disminución
    } else {
      console.log(`${this.name}: El stock permanece en ${this.stock}.`);
    }
  }

  notifyObservers(quantityAdded) {
    this.observers.forEach(user => {
      user.update(this.name, this.stock, quantityAdded);
    });
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(productName, newStock, quantityAdded) {
    console.log(`${this.name}: ¡${productName} ha recibido stock! Ahora hay ${newStock} unidades. Se agregaron ${quantityAdded}.`);
  }
}
