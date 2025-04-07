//3
// observer-pattern.js

/**
 * Product class that implements the Observable pattern
 * Allows users to subscribe and be notified of price changes
 */
class Product {
  constructor(name, initialPrice = 0) {
    this.name = name;
    this.price = initialPrice;
    this.observers = [];
  }

  /**
   * Add a user as an observer
   * @param {User} user - The user to subscribe to this product
   */
  subscribe(user) {
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} has subscribed to ${this.name}`);
    }
  }

  /**
   * Remove a user from observers
   * @param {User} user - The user to unsubscribe
   */
  unsubscribe(user) {
    const index = this.observers.indexOf(user);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${user.name} has unsubscribed from ${this.name}`);
    }
  }

  /**
   * Set a new price and notify all observers
   * @param {number} newPrice - The new price for the product
   */
  setPrice(newPrice) {
    const oldPrice = this.price;
    this.price = newPrice;
    
    // Only notify if the price actually changed
    if (oldPrice !== newPrice) {
      this.notifyObservers();
    }
  }

  /**
   * Notify all observers about the price change
   */
  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this);
    });
  }
}

/**
 * User class that implements the Observer pattern
 */
class User {
  constructor(name) {
    this.name = name;
  }

  /**
   * Receive updates from products the user has subscribed to
   * @param {Product} product - The product that had a price change
   */
  update(product) {
    console.log(`${this.name} received notification: The price of ${product.name} has been updated to $${product.price}`);
  }
}

// Export both classes
export { Product, User };