//1
// ...existing code...
//3
// ...existing code...

export class ContentCreator {
  constructor() {
    this.observers = [];
  }

  subscribe(user) {
    this.observers.push(user);
  }

  publish(post) {
    this.observers.forEach(observer => {
      observer.update(post);
    });
  }
}

export class User {
  constructor(name) {
    this.name = name;
  }

  update(post) {
    console.log(`${this.name} ha sido notificado de una nueva publicación: ${post}`);
  }
}
