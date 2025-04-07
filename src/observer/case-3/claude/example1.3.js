//3
// content-creator.js

/**
 * ContentCreator class that manages subscribers and publishes content
 */
class ContentCreator {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
    this.posts = [];
  }

  /**
   * Add a user to the subscribers list
   * @param {User} user - The user to subscribe
   */
  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
      console.log(`${user.name} has subscribed to ${this.name}`);
    }
  }

  /**
   * Remove a user from the subscribers list
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
   * @param {Object} post - The post content to publish
   */
  publish(post) {
    const fullPost = {
      ...post,
      author: this.name,
      publishDate: new Date()
    };
    
    this.posts.push(fullPost);
    console.log(`${this.name} published: "${post.title}"`);
    
    // Notify all subscribers about the new post
    this.notify(fullPost);
    
    return fullPost;
  }

  /**
   * Notify all subscribers about a new post
   * @param {Object} post - The post to notify about
   * @private
   */
  notify(post) {
    for (const subscriber of this.subscribers) {
      subscriber.update(post);
    }
  }

  /**
   * Get all published posts
   * @returns {Array} Array of posts
   */
  getAllPosts() {
    return this.posts;
  }
}

/**
 * User class representing a subscriber
 */
class User {
  constructor(name) {
    this.name = name;
    this.notifications = [];
  }

  /**
   * Receive updates about new posts from subscribed creators
   * @param {Object} post - The new post
   */
  update(post) {
    const notification = `New post from ${post.author}: "${post.title}"`;
    this.notifications.push({
      message: notification,
      post: post,
      receivedAt: new Date()
    });
    console.log(`${this.name} received notification: ${notification}`);
  }

  /**
   * Get all notifications received
   * @returns {Array} Array of notifications
   */
  getNotifications() {
    return this.notifications;
  }
}

// Export the classes
export { ContentCreator, User };