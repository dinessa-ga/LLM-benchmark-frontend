// 2
// contentManager.js

class User {
  constructor(username) {
    this.username = username;
  }

  update(content) {
    console.log(`[${this.username}] New update: ${content}`);
  }
}

class ContentCreator {
  constructor() {
    this.observers = new Set();
  }

  subscribe(user) {
    if (!(user instanceof User)) {
      throw new Error('Solo se pueden suscribir instancias de User');
    }
    this.observers.add(user);
  }

  unsubscribe(user) {
    this.observers.delete(user);
  }

  publish(postContent) {
    if (!postContent) return;
    
    console.log(`Publicando nuevo contenido: "${postContent}"`);
    this.observers.forEach(observer => {
      observer.update(postContent);
    });
  }
}

export { ContentCreator, User };
