//1
// observer-pattern.js

// Observer interface (implemented by User)
class Observer {
  constructor() {
    if (this.constructor === Observer) {
      throw new Error("Observer is an abstract class and cannot be instantiated directly");
    }
  }

  update(content) {
    throw new Error("Method 'update' must be implemented");
  }
}

// Subject class (ContentCreator)
class ContentCreator {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
    this.posts = [];
  }

  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
      console.log(`${user.name} subscribed to ${this.name}`);
    }
  }

  unsubscribe(user) {
    const index = this.subscribers.indexOf(user);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
      console.log(`${user.name} unsubscribed from ${this.name}`);
    }
  }

  publish(post) {
    this.posts.push(post);
    console.log(`${this.name} published: "${post.title}"`);
    this.notifySubscribers(post);
  }

  notifySubscribers(post) {
    for (const subscriber of this.subscribers) {
      subscriber.update(post);
    }
  }

  getPosts() {
    return this.posts;
  }
}

// Concrete Observer (User)
class User extends Observer {
  constructor(name) {
    super();
    this.name = name;
    this.notifications = [];
  }

  update(post) {
    const notification = `New post from ${post.creator}: "${post.title}"`;
    this.notifications.push(notification);
    console.log(`${this.name} received notification: ${notification}`);
  }

  getNotifications() {
    return this.notifications;
  }
}

// Post class to store post information
class Post {
  constructor(title, content, creator) {
    this.title = title;
    this.content = content;
    this.creator = creator;
    this.publishDate = new Date();
  }
}

// Export all classes
export { ContentCreator, User, Observer, Post };
