//1
// collaborativeDocument.js

class CollaborativeDocument {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
    }
  }

  edit(content) {
    this.subscribers.forEach(user => user.update(content));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(content) {
    console.log(`${this.name} received edit: ${content}`);
  }
}

export { CollaborativeDocument, User };
