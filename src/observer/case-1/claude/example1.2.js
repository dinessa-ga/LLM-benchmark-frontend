// 2
// news-system.js

// Observer pattern for news categories and users

/**
 * Clase NewsCategory que actúa como el sujeto (Subject) en el patrón Observer
 */
class NewsCategory {
  constructor(name) {
    this.name = name;
    this.observers = [];
    this.articles = [];
  }

  /**
   * Suscribe un usuario a esta categoría
   * @param {User} user - El usuario a suscribir
   */
  subscribe(user) {
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} se ha suscrito a la categoría ${this.name}`);
    } else {
      console.log(`${user.name} ya está suscrito a la categoría ${this.name}`);
    }
  }

  /**
   * Cancela la suscripción de un usuario
   * @param {User} user - El usuario a dar de baja
   */
  unsubscribe(user) {
    const index = this.observers.indexOf(user);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${user.name} ha cancelado su suscripción a la categoría ${this.name}`);
    }
  }

  /**
   * Publica un artículo y notifica a todos los suscriptores
   * @param {Object} article - El artículo a publicar
   */
  publish(article) {
    // Añadir el artículo a la lista de la categoría
    this.articles.push(article);
    
    // Añadir metadata al artículo
    const publishedArticle = {
      ...article,
      category: this.name,
      publishDate: new Date()
    };
    
    console.log(`Nuevo artículo publicado en ${this.name}: "${article.title}"`);
    
    // Notificar a todos los observadores
    this.notifyObservers(publishedArticle);
    
    return publishedArticle;
  }

  /**
   * Notifica a todos los observadores sobre un nuevo artículo
   * @param {Object} article - El artículo publicado
   */
  notifyObservers(article) {
    this.observers.forEach(observer => {
      observer.update(article);
    });
  }
}

/**
 * Clase User que implementa la interfaz Observer
 */
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.receivedArticles = [];
  }

  /**
   * Método update que implementa la interfaz Observer
   * @param {Object} article - El artículo publicado
   */
  update(article) {
    console.log(`Notificación para ${this.name}: Nuevo artículo en ${article.category} - "${article.title}"`);
    this.receivedArticles.push(article);
    
    // Aquí se podría implementar el envío de una notificación por email
    this.sendEmailNotification(article);
  }

  /**
   * Envía una notificación por email al usuario
   * @param {Object} article - El artículo publicado
   */
  sendEmailNotification(article) {
    console.log(`Enviando email a ${this.email} sobre nuevo artículo: "${article.title}"`);
    // Implementación real enviaría un email
  }

  /**
   * Muestra todos los artículos recibidos por el usuario
   */
  showReceivedArticles() {
    console.log(`${this.name} ha recibido ${this.receivedArticles.length} artículos:`);
    this.receivedArticles.forEach((article, index) => {
      console.log(`${index + 1}. "${article.title}" (${article.category}) - ${article.publishDate.toDateString()}`);
    });
  }
}

// Exportar las clases para usarlas en otros módulos
export { NewsCategory, User };