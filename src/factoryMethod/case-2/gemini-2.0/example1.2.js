// 2
// product_card.js

class ProductCard {
  constructor(data) {
      if (new.target === ProductCard) {
          throw new Error("Cannot instantiate abstract class ProductCard.");
      }
      this.data = data;
  }

  render() {
      throw new Error("Method 'render()' must be implemented.");
  }
}

class StandardProduct extends ProductCard {
  constructor(data) {
      super(data);
  }

  render() {
      return `
          <div class="product-card standard">
              <h3>${this.data.name}</h3>
              <p>${this.data.description}</p>
              <p>Price: $${this.data.price}</p>
          </div>
      `;
  }
}

class DiscountProduct extends ProductCard {
  constructor(data) {
      super(data);
  }

  render() {
      const discountedPrice = this.data.price * (1 - this.data.discount);
      return `
          <div class="product-card discount">
              <h3>${this.data.name}</h3>
              <p>${this.data.description}</p>
              <p>Price: <del>$${this.data.price}</del> $${discountedPrice.toFixed(2)}</p>
              <p>Discount: ${this.data.discount * 100}%</p>
          </div>
      `;
  }
}

class ExclusiveProduct extends ProductCard {
  constructor(data) {
      super(data);
  }

  render() {
      return `
          <div class="product-card exclusive">
              <h3>${this.data.name}</h3>
              <p>${this.data.description}</p>
              <p>Price: $${this.data.price}</p>
              <p>Exclusive Offer!</p>
          </div>
      `;
  }
}

class ProductFactory {
  static createProductCard(type, data) {
      switch (type) {
          case 'standard':
              return new StandardProduct(data);
          case 'discount':
              return new DiscountProduct(data);
          case 'exclusive':
              return new ExclusiveProduct(data);
          default:
              throw new Error(`Invalid product type: ${type}`);
      }
  }
}

export { ProductCard, StandardProduct, DiscountProduct, ExclusiveProduct, ProductFactory };