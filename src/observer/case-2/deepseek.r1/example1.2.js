// 2
// product.js
export class Product {
  constructor() {
    this._price = 0;
    this._subscribers = new Set();
  }

  subscribe(user) {
    if (!(user instanceof User)) {
      throw new Error('Solo se pueden suscribir instancias de User');
    }
    this._subscribers.add(user);
  }

  unsubscribe(user) {
    this._subscribers.delete(user);
  }

  setPrice(newPrice) {
    if (typeof newPrice !== 'number' || newPrice < 0) {
      throw new Error('Precio inválido');
    }
    
    if (this._price !== newPrice) {
      this._price = newPrice;
      this._notifySubscribers();
    }
  }

  _notifySubscribers() {
    for (const user of this._subscribers) {
      user.update(this._price);
    }
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(newPrice) {
    if (typeof newPrice !== 'number') {
      throw new Error('Precio no válido recibido');
    }
    console.log(`[${this.name}] Actualización: El producto ahora cuesta $${newPrice}`);
  }
}

// Características adicionales:
// 1. Validación de tipos en subscribe() y setPrice()
// 2. Uso de Set para evitar duplicados automáticamente
// 3. Método unsubscribe() adicional
// 4. Protección contra precios negativos
// 5. Notificaciones solo cuando el precio cambia realmente
// 6. Mensajes de error descriptivos
// 7. Prefijo guión bajo para métodos/propiedades privadas
