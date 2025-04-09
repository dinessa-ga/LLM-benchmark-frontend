//1
// observer.js
class ContentCreator {
  constructor() {
    this.observers = [];
    this.posts = [];
  }

  subscribe(user) {
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} se ha suscrito.`);
    } else {
      console.log(`${user.name} ya está suscrito.`);
    }
  }

  unsubscribe(user) {
    this.observers = this.observers.filter(obs => obs !== user);
    console.log(`${user.name} se ha desuscrito.`);
  }

  publish(post) {
    this.posts.push(post);
    console.log(`Nueva publicación: ${post.title}`);
    this.notifyObservers(post);
  }

  notifyObservers(post) {
    this.observers.forEach(observer => {
      observer.update(post);
    });
  }
}


class User {
  constructor(name) {
    this.name = name;
  }

  update(post) {
    console.log(`${this.name} ha recibido una notificación: Nueva publicación - ${post.title}`);
  }
}

export { ContentCreator, User };

