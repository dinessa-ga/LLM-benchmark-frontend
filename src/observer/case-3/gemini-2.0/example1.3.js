//3
// content-creator.js
class ContentCreator {
  constructor() {
    this.observers = new Set();
  }

  subscribe(user) {
    if (typeof user.update !== 'function') {
      throw new Error("El objeto user no implementa el método 'update'");
    }
    this.observers.add(user);
    console.log(`${user.name} se ha suscrito.`);
  }

  unsubscribe(user) {
    this.observers.delete(user);
    console.log(`${user.name} se ha desuscrito.`);
  }

  publish(post) {
    console.log(`Nueva publicación: ${post.title}`);
    this.notifyObservers(post);
  }

  notifyObservers(post) {
    for (const observer of this.observers) {
      observer.update(post);
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(post) {
    console.log(`${this.name} ha recibido una notificación: Nueva publicación - ${post.title}`);
  }
}

export { ContentCreator, User };