//1
// store-product.js
/**
 * Clase User que implementa el patrón Observer
 */
class User {
  constructor(name) {
    this.name = name;
  }

  /**
   * Método que será llamado cuando el producto tenga stock disponible
   * @param {StoreProduct} product - Producto que notifica la disponibilidad
   * @param {number} quantity - Cantidad de stock disponible
   */
  update(product, quantity) {
    console.log(`¡Hola ${this.name}! El producto "${product.name}" ahora tiene ${quantity} unidades disponibles.`);
  }
}

/**
 * Clase StoreProduct que implementa el patrón Observable
 */
class StoreProduct {
  constructor(name, initialStock = 0) {
    this.name = name;
    this.stock = initialStock;
    this.observers = [];
  }

  /**
   * Suscribe un usuario para recibir notificaciones de este producto
   * @param {User} user - Usuario que desea recibir notificaciones
   */
  subscribe(user) {
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} se ha suscrito a las notificaciones de "${this.name}"`);
    }
  }

  /**
   * Cancela la suscripción de un usuario
   * @param {User} user - Usuario que desea cancelar su suscripción
   */
  unsubscribe(user) {
    const index = this.observers.indexOf(user);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${user.name} ha cancelado su suscripción a "${this.name}"`);
    }
  }

  /**
   * Actualiza el stock del producto y notifica a los observadores si hay stock disponible
   * @param {number} quantity - Cantidad a añadir o restar del stock (puede ser negativa)
   */
  updateStock(quantity) {
    const previousStock = this.stock;
    this.stock += quantity;
    
    // Evitamos stock negativo
    if (this.stock < 0) {
      this.stock = 0;
    }
    
    console.log(`Stock de "${this.name}" actualizado: ${previousStock} → ${this.stock}`);
    
    // Si ahora hay stock disponible y antes no había, notificamos
    if (previousStock === 0 && this.stock > 0) {
      this.notifyObservers();
    }
  }

  /**
   * Notifica a todos los observadores sobre el stock disponible
   */
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this, this.stock);
    }
  }
}

// Exportamos las clases
export { StoreProduct, User };

