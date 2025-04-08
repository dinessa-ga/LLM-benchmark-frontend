// 2
// productFactory.js
export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('render() method must be implemented');
  }
}

export class StandardProduct extends ProductCard {
  render() {
    return `
      <div class="product standard">
        <h3>${this.data.name}</h3>
        <p>Price: $${this.data.price.toFixed(2)}</p>
        ${this.data.description ? `<p>${this.data.description}</p>` : ''}
      </div>
    `;
  }
}

export class DiscountProduct extends ProductCard {
  render() {
    const discountPrice = this.data.price * (1 - this.data.discount);
    return `
      <div class="product discount">
        <h3>${this.data.name}</h3>
        <p class="original-price">Original: $${this.data.price.toFixed(2)}</p>
        <p class="discounted-price">Now: $${discountPrice.toFixed(2)}</p>
        <p class="discount-percent">(${(this.data.discount * 100).toFixed(0)}% OFF)</p>
      </div>
    `;
  }
}

export class ExclusiveProduct extends ProductCard {
  render() {
    return `
      <div class="product exclusive">
        <h3>🌟 ${this.data.name}</h3>
        <p>Premium Price: $${this.data.price.toFixed(2)}</p>
        <p class="exclusive-notice">Exclusive Member Item</p>
        ${this.data.benefits ? `<ul>${this.data.benefits.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      </div>
    `;
  }
}

export class ProductFactory {
  static createProductCard(type, data) {
    const normalizedType = type.toLowerCase();
    
    switch(normalizedType) {
      case 'standard':
        return new StandardProduct(data);
      case 'discount':
        if (!data.discount) throw new Error('Discount requires discount value');
        return new DiscountProduct(data);
      case 'exclusive':
        return new ExclusiveProduct(data);
      default:
        throw new Error(`Unknown product type: ${type}`);
    }
  }
}
