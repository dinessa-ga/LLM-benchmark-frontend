// chat.js

// Clase ChatChannel
export class ChatChannel {
  constructor() {
    this.observers = new Set(); // Almacena los observadores suscritos
  }

  // Método para suscribir un observador
  subscribe(observer) {
    if (typeof observer.update !== 'function') {
      throw new Error('El objeto debe implementar el método update');
    }
    this.observers.add(observer);
  }

  // Método para desuscribir un observador
  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  // Método para enviar un mensaje y notificar a los observadores
  sendMessage(message) {
    console.log(`Mensaje enviado: "${message}"`);
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Clase User (implementa Observer)
export class User {
  constructor(name) {
    this.name = name;
  }

  // Método requerido por la interfaz Observer
  update(message) {
    console.log(`${this.name} ha recibido el mensaje: "${message}"`);
  }
}