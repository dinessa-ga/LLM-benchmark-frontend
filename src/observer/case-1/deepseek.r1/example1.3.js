//3
// newsSystem.js
class User {
  constructor(name) {
    this.name = name;
  }

  update(article) {
    console.log(`[Notificación para ${this.name}] Nuevo artículo publicado: "${article.title}"`);
    console.log(`Contenido: ${article.content}\n`);
  }
}

class NewsCategory {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(user) {
    if (!(user instanceof User)) {
      throw new Error('Solo se pueden suscribir instancias de la clase User');
    }
    this.subscribers.add(user);
  }

  unsubscribe(user) {
    this.subscribers.delete(user);
  }

  publish(article) {
    if (!this.#isValidArticle(article)) {
      throw new Error('Artículo inválido: debe ser objeto con título y contenido');
    }
    
    this.subscribers.forEach(user => {
      try {
        user.update(article);
      } catch (error) {
        console.error(`Error notificando a ${user.name}:`, error.message);
      }
    });
  }

  #isValidArticle(article) {
    return (
      typeof article === 'object' &&
      !Array.isArray(article) &&
      article !== null &&
      'title' in article &&
      'content' in article &&
      typeof article.title === 'string' &&
      typeof article.content === 'string'
    );
  }
}

export { User, NewsCategory };