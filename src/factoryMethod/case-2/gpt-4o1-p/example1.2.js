// 2
// ...existing code...

export class ProductCard {
  constructor(data) {
    this.data = data;
  }
  render() {
    console.log(`Rendering ProductCard with data:`, this.data);
  }
}

export class StandardProduct extends ProductCard {
  render() {
    console.log(`Rendering StandardProduct with data:`, this.data);
  }
}

export class DiscountProduct extends ProductCard {
  render() {
    console.log(`Rendering DiscountProduct with data:`, this.data);
  }
}

export class ExclusiveProduct extends ProductCard {
  render() {
    console.log(`Rendering ExclusiveProduct with data:`, this.data);
  }
}

export class ProductFactory {
  static createProductCard(type, data) {
    switch (type) {
      case 'standard':
        return new StandardProduct(data);
      case 'discount':
        return new DiscountProduct(data);
      case 'exclusive':
        return new ExclusiveProduct(data);
      default:
        throw new Error('Unknown product type');
    }
  }
}

// ...existing code...