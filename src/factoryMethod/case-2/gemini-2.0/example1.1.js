//1
// ProductCard.js

// Clase base abstracta para las tarjetas de producto
class ProductCard {
  constructor(data) {
    if (new.target === ProductCard) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.data = data;
  }

  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}

// Clase para productos estándar
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
        <button>Add to Cart</button>
      </div>
    `;
  }
}

// Clase para productos con descuento
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
        <p>Price: <span class="original-price">$${this.data.price}</span> <span class="discounted-price">$${discountedPrice.toFixed(2)}</span></p>
        <p>Discount: ${this.data.discount * 100}%</p>
        <button>Add to Cart</button>
      </div>
    `;
  }
}

// Clase para productos exclusivos
class ExclusiveProduct extends ProductCard {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="product-card exclusive">
        <h3>${this.data.name} <span class="exclusive-tag">Exclusive</span></h3>
        <p>${this.data.description}</p>
        <p>Price: $${this.data.price}</p>
        <p>Limited Edition!</p>
        <button>Add to Cart</button>
      </div>
    `;
  }
}


// Factory Method
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

