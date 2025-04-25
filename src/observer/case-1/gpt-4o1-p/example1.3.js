//3
// ...existing code...

export class NewsCategory {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  publish(article) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(article);
    });
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(article) {
    console.log(`${this.name} recibió el artículo: ${article}`);
  }
}

// ...existing code...