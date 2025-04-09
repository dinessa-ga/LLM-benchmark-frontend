// 2
// ...existing code...
export class CollaborativeDocument {
  constructor() {
    this.observers = [];
  }

  subscribe(user) {
    this.observers.push(user);
  }

  edit(content) {
    this.content = content;
    this.observers.forEach(observer => observer.update(content));
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(content) {
    console.log(`${this.name} recibió una notificación: ${content}`);
  }
}
// ...existing code...