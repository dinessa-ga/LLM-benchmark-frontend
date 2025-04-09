//3
// collaborative-document.js
class CollaborativeDocument {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(user) {
    if (user && typeof user.update === 'function') {
      this.subscribers.add(user);
    }
  }

  unsubscribe(user) {
    this.subscribers.delete(user);
  }

  edit(content) {
    this.subscribers.forEach(subscriber => {
      subscriber.update(content);
    });
  }
}

class User {
  constructor(username) {
    this.username = username;
  }

  update(content) {
    console.log(`User ${this.username} received update: "${content}"`);
  }
}

export { CollaborativeDocument, User };