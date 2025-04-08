// 2
// newsSystem.js
class User {
  constructor(name) {
    this.name = name;
  }

  update(article) {
    console.log(`[${this.name}] Nueva actualización: "${article.title}" - ${article.content}`);
  }
}

class NewsCategory {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(user) {
    if (!(user instanceof User)) {
      throw new Error('Solo se pueden suscribir instancias de User');
    }
    this.subscribers.add(user);
  }

  unsubscribe(user) {
    this.subscribers.delete(user);
  }

  publish(article) {
    if (!article || typeof article !== 'object' || !article.title || !article.content) {
      throw new Error('El artículo debe ser un objeto con título y contenido');
    }
    
    for (const user of this.subscribers) {
      user.update(article);
    }
  }
}

export { User, NewsCategory };
