//1
// contentCreator.js

class User {
  constructor(name) {
    this.name = name;
  }

  update(post) {
    console.log(`${this.name} received update: ${post}`);
  }
}

class ContentCreator {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  publish(post) {
    this.subscribers.forEach(subscriber => {
      subscriber.update(post);
    });
  }
}

export { ContentCreator, User };

