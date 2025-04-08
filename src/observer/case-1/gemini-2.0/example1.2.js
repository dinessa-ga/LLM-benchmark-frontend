// 2
// news.js

class NewsCategory {
  constructor(name) {
    this.name = name;
    this.observers = new Set(); // Usamos un Set para evitar duplicados
  }

  subscribe(user) {
    this.observers.add(user);
    console.log(`${user.name} se ha suscrito a ${this.name}`);
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
      observer.update(this.name, article);
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