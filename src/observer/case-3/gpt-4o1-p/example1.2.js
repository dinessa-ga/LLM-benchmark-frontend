// 2
// ...existing code...
export class ContentCreator {
  constructor() {
    this.observers = [];
  }

  subscribe(user) {
    this.observers.push(user);
  }

  publish(post) {
    this.observers.forEach(obs => obs.update(post));
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(post) {
    console.log(`${this.name} recibió la notificación: ${post}`);
  }
}