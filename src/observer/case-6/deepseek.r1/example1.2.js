// 2
// collaborativeDocument.js
class CollaborativeDocument {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(user) {
    this.subscribers.add(user);
  }

  unsubscribe(user) {
    this.subscribers.delete(user);
  }

  edit(content) {
    for (const user of this.subscribers) {
      user.update(content);
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(content) {
    console.log(`[${this.name}] Document updated:`, content);
  }
}

export { CollaborativeDocument, User };