// 2
// observer-pattern.js

/**
 * ContentCreator class that implements the Subject part of the Observer pattern
 */
class ContentCreator {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
    this.posts = [];
  }

  /**
   * Subscribe a user to receive notifications
   * @param {User} user - The user to subscribe
   */
  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
      console.log(`${user.name} has subscribed to ${this.name}`);
    }
  }

  /**
   * Unsubscribe a user from notifications
   * @param {User} user - The user to unsubscribe
   */
  unsubscribe(user) {
    const index = this.subscribers.indexOf(user);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
      console.log(`${user.name} has unsubscribed from ${this.name}`);
    }
  }

  /**
   * Publish a new post and notify all subscribers
   * @param {Object} post - The post being published
   */
  publish(post) {
    const fullPost = {
      ...post,
      creator: this.name,
      date: new Date()
    };
    
    this.posts.push(fullPost);
    console.log(`${this.name} published: "${post.title}"`);
    
    // Notify all subscribers
    this.notifySubscribers(fullPost);
    
    return fullPost;
  }

  /**
   * Notify all subscribers about a new post
   * @param {Object} post - The post to notify about
   * @private
   */
  notifySubscribers(post) {
    for (const subscriber of this.subscribers) {
      subscriber.update(post);
    }
  }

  /**
   * Get all published posts
   * @returns {Array} Array of posts
   */
  getPosts() {
    return this.posts;
  }
}

/**
 * User class that implements the Observer part of the Observer pattern
 */
class User {
  constructor(name) {
    this.name = name;
    this.notifications = [];
  }

  /**
   * Receive update notifications from subscribed creators
   * @param {Object} post - The post notification
   */
  update(post) {
    const notification = `New post from ${post.creator}: "${post.title}"`;
    this.notifications.push(notification);
    console.log(`${this.name} received notification: ${notification}`);
  }

  /**
   * Get all notifications
   * @returns {Array} Array of notifications
   */
  getNotifications() {
    return this.notifications;
  }
}

// Export the classes
export { ContentCreator, User };