// 2
// collaborative-document.js

/**
 * Clase que representa un usuario que puede suscribirse a documentos
 */
class User {
  /**
   * @param {string} name - Nombre del usuario
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Método que se llama cuando un documento al que está suscrito es actualizado
   * @param {CollaborativeDocument} document - El documento que fue actualizado
   * @param {string} content - El nuevo contenido del documento
   */
  update(document, content) {
    console.log(`${this.name} ha sido notificado: El documento "${document.title}" ha sido actualizado con: "${content}"`);
  }
}

/**
 * Clase que representa un documento colaborativo
 * Implementa el patrón Observador para notificar a los usuarios suscritos
 */
class CollaborativeDocument {
  /**
   * @param {string} title - Título del documento
   */
  constructor(title) {
    this.title = title;
    this.content = "";
    this.observers = []; // Lista de usuarios suscritos
  }

  /**
   * Suscribe un usuario para recibir notificaciones del documento
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
      console.log(`${user.name} se ha suscrito al documento "${this.title}"`);
      return true;
    } else {
      console.log(`${user.name} ya está suscrito al documento "${this.title}"`);
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
      console.log(`${user.name} ha cancelado su suscripción al documento "${this.title}"`);
      return true;
    }
    return false;
  }

  /**
   * Edita el contenido del documento y notifica a todos los usuarios suscritos
   * @param {string} content - El nuevo contenido del documento
   */
  edit(content) {
    this.content = content;
    this.notifyObservers();
  }

  /**
   * Notifica a todos los observadores sobre la actualización del documento
   * @private
   */
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this, this.content);
    }
  }

  /**
   * Obtiene el contenido actual del documento
   * @returns {string} - El contenido del documento
   */
  getContent() {
    return this.content;
  }
}

// Exportamos las clases usando ES modules
export { CollaborativeDocument, User };