//3
// metric.js
export class Metric {
  #observers = new Set();
  #currentValue = null;

  constructor(initialValue = null) {
    this.#currentValue = initialValue;
  }

  /**
   * Suscribe un manager para recibir actualizaciones
   * @param {Manager} manager - Instancia del manager a suscribir
   * @throws {Error} Si el manager no implementa el método update
   */
  subscribe(manager) {
    if (typeof manager.update !== 'function') {
      throw new Error('Manager debe implementar el método update');
    }
    
    this.#observers.add(manager);
    // Notificar valor actual inmediatamente al suscribirse
    if (this.#currentValue !== null) {
      manager.update(this.#currentValue);
    }
  }

  /**
   * Desuscribe un manager
   * @param {Manager} manager - Instancia del manager a desuscribir
   */
  unsubscribe(manager) {
    this.#observers.delete(manager);
  }

  /**
   * Actualiza el valor y notifica a los observadores
   * @param {*} value - Nuevo valor de la métrica
   */
  update(value) {
    this.#currentValue = value;
    this.#observers.forEach(observer => {
      try {
        observer.update(value);
      } catch (error) {
        console.error(`Error notificando a ${observer.name}:`, error);
      }
    });
  }

  /**
   * Obtiene el valor actual de la métrica
   */
  get value() {
    return this.#currentValue;
  }
}

export class Manager {
  /**
   * @param {object} config - Configuración del manager
   * @param {string} config.name - Nombre identificativo
   * @param {function} config.onUpdate - Callback para manejar actualizaciones
   */
  constructor({ name = 'Anonymous', onUpdate = () => {} }) {
    this.name = name;
    this.#onUpdate = onUpdate;
  }

  #onUpdate;

  /**
   * Maneja las actualizaciones de la métrica
   * @param {*} value - Valor recibido de la métrica
   */
  update(value) {
    try {
      this.#onUpdate(value);
    } catch (error) {
      console.error(`Error en ${this.name} al procesar update:`, error);
    }
  }
}