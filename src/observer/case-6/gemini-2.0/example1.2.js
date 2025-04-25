// 2
export class User {
  constructor(name) {
    this.name = name;
  }

  update(content) {
    console.log(`${this.name} received update: ${content}`);
  }
}

export class CollaborativeDocument {
  constructor() {
    this.observers = [];
    this.content = "";
  }

  subscribe(user) {
    this.observers.push(user);
    console.log(`${user.name} subscribed to the document.`);
  }

  unsubscribe(user) {
    this.observers = this.observers.filter(observer => observer !== user);
    console.log(`${user.name} unsubscribed from the document.`);
  }

  edit(content) {
    this.content = content;
    console.log(`Document content updated to: ${this.content}`);
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.content);
    });
  }
}

// Ejemplo de uso (opcional - solo para demostración)
// Para ejecutar esto en Node.js, asegúrate de tener "type": "module" en package.json
/*
const user1 = new User("Alice");
const user2 = new User("Bob");

const document = new CollaborativeDocument();

document.subscribe(user1);
document.subscribe(user2);

document.edit("Initial content.");

document.unsubscribe(user2);

document.edit("Updated content after Bob unsubscribed.");
*/