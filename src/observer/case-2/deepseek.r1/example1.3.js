//3
// product.js
export class Product {
  constructor() {
    this._price = 0;
    this._subscribers = new Set();
  }

  subscribe(user) {
    if (!(user instanceof User)) {
      throw new Error("Solo se pueden suscribir instancias de User");
    }
    this._subscribers.add(user);
  }

  unsubscribe(user) {
    this._subscribers.delete(user);
  }

  setPrice(newPrice) {
    if (typeof newPrice !== "number" || newPrice < 0) {
      throw new Error("El precio debe ser un número positivo");
    }
    
    if (this._price !== newPrice) {
      this._price = newPrice;
      this._notifySubscribers();
    }
  }

  _notifySubscribers() {
    this._subscribers.forEach(user => user.update(this._price));
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(newPrice) {
    if (typeof newPrice !== "number") {
      throw new Error("Precio no válido recibido");
    }
    console.log(`[${this.name}] Notificación: Nuevo precio - $${newPrice}`);
  }
}

/*
Ejemplo de uso:
import { Product, User } from './product.js';

const libro = new Product();
const ana = new User("Ana");
const carlos = new User("Carlos");

libro.subscribe(ana);
libro.subscribe(carlos);

libro.setPrice(29.99);  // Notifica a ambos
libro.setPrice(24.95);  // Notifica cambio
libro.setPrice(24.95);  // No notifica (mismo precio)
libro.unsubscribe(carlos);
libro.setPrice(19.99);  // Solo notifica a Ana
*/