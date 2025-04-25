//3
// contentManager.js

class User {
  constructor(username) {
    this.username = username;
  }

  update(post) {
    console.log(`[${this.username}] Notificación: ${post}`);
  }
}

class ContentCreator {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(user) {
    if (!(user instanceof User)) {
      throw new Error('Solo instancias de User pueden suscribirse');
    }
    this.subscribers.add(user);
    console.log(`${user.username} se ha suscrito`);
  }

  unsubscribe(user) {
    this.subscribers.delete(user);
    console.log(`${user.username} se ha desuscrito`);
  }

  publish(post) {
    if (!post?.trim()) {
      console.warn('No se puede publicar contenido vacío');
      return;
    }
    
    console.log(`📢 Nuevo post: "${post}"`);
    this.subscribers.forEach(subscriber => {
      subscriber.update(post);
    });
  }
}

export { ContentCreator, User };