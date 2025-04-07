//3
// task-notification-system.js

/**
 * Clase que representa un usuario que puede suscribirse a tareas
 */
class User {
  /**
   * @param {string} name - Nombre del usuario
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Método que se llama cuando una tarea a la que está suscrito cambia de estado
   * @param {Task} task - La tarea que cambió de estado
   * @param {string} status - El nuevo estado de la tarea
   */
  update(task, status) {
    console.log(`${this.name} ha sido notificado: La tarea "${task.title}" ha cambiado a estado: "${status}"`);
  }
}

/**
 * Clase que representa una tarea que puede cambiar de estado
 * Implementa el patrón Observador para notificar a los usuarios suscritos
 */
class Task {
  /**
   * @param {string} title - Título de la tarea
   * @param {string} description - Descripción de la tarea
   */
  constructor(title, description = "") {
    this.title = title;
    this.description = description;
    this.status = "pending"; // Estado inicial: pendiente
    this.observers = []; // Lista de usuarios suscritos
  }

  /**
   * Suscribe un usuario para recibir notificaciones de la tarea
   * @param {User} user - El usuario a suscribir
   * @returns {boolean} - Verdadero si la suscripción fue exitosa
   */
  subscribe(user) {
    if (!(user instanceof User)) {
      console.error("Solo se pueden suscribir instancias de User");
      return false;
    }
    
    // Verificar si el usuario ya está suscrito
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} se ha suscrito a la tarea "${this.title}"`);
      return true;
    } else {
      console.log(`${user.name} ya está suscrito a la tarea "${this.title}"`);
      return false;
    }
  }

  /**
   * Cancela la suscripción de un usuario
   * @param {User} user - El usuario que desea cancelar su suscripción
   * @returns {boolean} - Verdadero si la cancelación fue exitosa
   */
  unsubscribe(user) {
    const index = this.observers.indexOf(user);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${user.name} ha cancelado su suscripción a la tarea "${this.title}"`);
      return true;
    }
    return false;
  }

  /**
   * Cambia el estado de la tarea y notifica a todos los usuarios suscritos
   * @param {string} status - El nuevo estado de la tarea
   */
  setStatus(status) {
    // Opcional: validar que el status sea válido (por ejemplo: 'pending', 'in_progress', 'completed', 'cancelled')
    const oldStatus = this.status;
    this.status = status;
    
    // Solo notificar si el estado realmente cambió
    if (oldStatus !== status) {
      this.notifyObservers();
    }
  }

  /**
   * Notifica a todos los observadores sobre el cambio de estado de la tarea
   * @private
   */
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this, this.status);
    }
  }

  /**
   * Obtiene el estado actual de la tarea
   * @returns {string} - El estado de la tarea
   */
  getStatus() {
    return this.status;
  }
}

// Exportamos las clases usando ES modules
export { Task, User };