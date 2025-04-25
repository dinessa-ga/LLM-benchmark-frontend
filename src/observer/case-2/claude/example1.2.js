// 2
// product-observer.js

/**
 * Product class that acts as the Subject in the Observer pattern
 * Manages subscribers and notifies them of price changes
 */
class Product {
  constructor(name, initialPrice = 0) {
    this.name = name;
    this.price = initialPrice;
    this.observers = []; // List of subscribed users
  }

  /**
   * Subscribe a user to receive notifications about this product
   * @param {User} user - The user object to subscribe
   */
  subscribe(user) {
    // Only add user if not already subscribed
    if (!this.observers.includes(user)) {
      this.observers.push(user);
      console.log(`${user.name} has subscribed to ${this.name}`);
    }
  }

  /**
   * Unsubscribe a user from receiving notifications
   * @param {User} user - The user object to unsubscribe
   */
  unsubscribe(user) {
    const index = this.observers.indexOf(user);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(`${user.name} has unsubscribed from ${this.name}`);
    }
  }

  /**
   * Set a new price for the product and notify all observers
   * @param {number} newPrice - The new price to set
   */
  setPrice(newPrice) {
    if (this.price === newPrice) return; // No change, no notification needed
    
    const oldPrice = this.price;
    this.price = newPrice;
    
    // Notify all observers about the price change
    this.notifyObservers(oldPrice, newPrice);
  }

  /**
   * Notify all subscribed observers about a price change
   * @param {number} oldPrice - The previous price
   * @param {number} newPrice - The new price
   */
  notifyObservers(oldPrice, newPrice) {
    for (const observer of this.observers) {
      observer.update(this, oldPrice, newPrice);
    }
  }
}

/**
 * User class that acts as the Observer in the Observer pattern
 * Receives notifications when products they've subscribed to change price
 */
class User {
  constructor(name) {
    this.name = name;
  }

  /**
   * Receive update notifications from subscribed products
   * @param {Product} product - The product that changed
   * @param {number} oldPrice - The previous price
   * @param {number} newPrice - The new price
   */
  update(product, oldPrice, newPrice) {
    const priceChange = newPrice - oldPrice;
    const changeDirection = priceChange > 0 ? 'increased' : 'decreased';
    const changeAmount = Math.abs(priceChange).toFixed(2);
    
    console.log(
      `Notification for ${this.name}: The price of ${product.name} has ${changeDirection} ` +
      `by $${changeAmount} (from $${oldPrice.toFixed(2)} to $${newPrice.toFixed(2)})`
    );
  }
}

// Export both classes
export { Product, User };