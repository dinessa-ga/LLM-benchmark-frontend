//3
// productClasses.js
export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Render method must be implemented in child class');
  }
}

export class StandardProduct extends ProductCard {
  render() {
    return `
      <div class="product standard-product">
        <h2>${this.data.name}</h2>
        <p class="price">$${this.data.price.toFixed(2)}</p>
        ${this.data.description ? `<p class="description">${this.data.description}</p>` : ''}
      </div>
    `;
  }
}

export class DiscountProduct extends ProductCard {
  render() {
    const discountAmount = this.data.price * this.data.discount;
    const finalPrice = this.data.price - discountAmount;
    
    return `
      <div class="product discount-product">
        <h2 class="sale-title">${this.data.name} (ON SALE)</h2>
        <p class="original-price">Was: $${this.data.price.toFixed(2)}</p>
        <p class="discount-price">Now: $${finalPrice.toFixed(2)}</p>
        <p class="discount-amount">Save $${discountAmount.toFixed(2)} (${(this.data.discount * 100).toFixed(0)}%)</p>
      </div>
    `;
  }
}

export class ExclusiveProduct extends ProductCard {
  render() {
    return `
      <div class="product exclusive-product">
        <div class="exclusive-banner">EXCLUSIVE</div>
        <h2>${this.data.name}</h2>
        <p class="premium-price">$${this.data.price.toFixed(2)}</p>
        ${this.data.exclusiveFeatures ? 
          `<div class="exclusive-features">
            ${this.data.exclusiveFeatures.map(feature => `
              <div class="feature">⭐ ${feature}</div>
            `).join('')}
          </div>` : ''
        }
      </div>
    `;
  }
}

export class ProductFactory {
  static createProductCard(type, data) {
    const normalizedType = type.toLowerCase().trim();
    
    switch(normalizedType) {
      case 'standard':
        return new StandardProduct(data);
      
      case 'discount':
        if (typeof data.discount !== 'number' || data.discount <= 0) {
          throw new Error('Invalid discount value - must be positive number');
        }
        return new DiscountProduct(data);
      
      case 'exclusive':
        if (!data.exclusiveFeatures || !Array.isArray(data.exclusiveFeatures)) {
          throw new Error('Exclusive products require features array');
        }
        return new ExclusiveProduct(data);
      
      default:
        throw new Error(`Invalid product type: ${type}. Valid types are: standard, discount, exclusive`);
    }
  }
}