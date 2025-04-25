// 2
// store-system.js

/**
 * Clase User que implementa el patrón Observer
 * Cada usuario tiene un método update para recibir notificaciones sobre productos
 */
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  /**
   * Método que recibe notificaciones cuando un producto tiene stock disponible
   * @param {StoreProduct} product - El producto que ha sido actualizado
   * @param {number} quantity - La cantidad actual de stock
   */
  update(product, quantity) {
    console.log(`Notificación para ${this.name} (${this.email}): El producto "${product.name}" ahora tiene ${quantity} unidades disponibles.`);
  }
}

/**
 * Clase StoreProduct que implementa el patrón Observable
 * Mantiene una lista de observadores y los notifica cuando hay stock disponible
 */
class StoreProduct {
  constructor(name, price, initialStock = 0) {
    this.name = name;
    this.price = price;
    this.stock = initialStock;
    this.observers = []; // Lista de usuarios suscritos
  }

  /**
   * Suscribe un usuario para recibir notificaciones de este producto
   * @param {User} user - Usuario que desea recibir notificaciones
   * @returns {boolean} - Indica si la suscripción fue exitosa
   */
  subscribe(user) {
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} se ha suscrito a las notificaciones del producto "${this.name}"`);
      return true;
    }
    console.log(`${user.name} ya está suscrito al producto "${this.name}"`);
    return false;
  }

  /**
   * Cancela la suscripción de un usuario
   * @param {User} user - Usuario que desea cancelar su suscripción
   * @returns {boolean} - Indica si la cancelación fue exitosa
   */
  unsubscribe(user) {
    const index = this.observers.indexOf(user);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${user.name} ha cancelado su suscripción al producto "${this.name}"`);
      return true;
    }
    console.log(`${user.name} no estaba suscrito al producto "${this.name}"`);
    return false;
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
   * @private
   */
  notifyObservers() {
    if (this.observers.length === 0) {
      console.log(`No hay usuarios suscritos al producto "${this.name}"`);
      return;
    }
    
    console.log(`Notificando a ${this.observers.length} usuarios sobre disponibilidad de "${this.name}"`);
    for (const observer of this.observers) {
      observer.update(this, this.stock);
    }
  }
}

// Exportamos las clases para que puedan ser importadas en otros archivos
export { StoreProduct, User };