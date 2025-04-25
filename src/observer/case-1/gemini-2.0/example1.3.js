//3
// news.js

class NewsCategory {
  constructor(name) {
    this.name = name;
    this.observers = new Set();
  }

  subscribe(user) {
    if (user && typeof user.update === 'function') {
      this.observers.add(user);
      console.log(`${user.name} se ha suscrito a ${this.name}`);
    } else {
      console.error("Invalid user object.  Must have an 'update' method.");
    }

  }

  unsubscribe(user) {
    this.observers.delete(user);
    console.log(`${user.name} se ha desuscrito de ${this.name}`);
  }

  publish(article) {
    console.log(`Nuevo artículo publicado en ${this.name}: ${article}`);
    this.notifyObservers(article);
  }

  notifyObservers(article) {
    this.observers.forEach(observer => {
      try {
        observer.update(this.name, article);
      } catch (error) {
        console.error(`Error notifying observer ${observer.name}:`, error);
      }

    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(category, article) {
    console.log(`${this.name} recibió una notificación de ${category}: ${article}`);
  }
}

export { NewsCategory, User };