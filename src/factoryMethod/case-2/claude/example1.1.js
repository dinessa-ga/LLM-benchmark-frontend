//1
// ProductCard.js

// Clase base ProductCard
export class ProductCard {
  constructor(data) {
    this.data = data;
  }
  
  render() {
    throw new Error('El método render debe ser implementado por las clases hijas');
  }
}

// Clase para productos estándar
export class StandardProduct extends ProductCard {
  constructor(data) {
    super(data);
  }
  
  render() {
    return `
      <div class="product-card standard">
        <h2>${this.data.name}</h2>
        <p class="description">${this.data.description}</p>
        <p class="price">€${this.data.price.toFixed(2)}</p>
        <button>Añadir al carrito</button>
      </div>
    `;
  }
}

// Clase para productos con descuento
export class DiscountProduct extends ProductCard {
  constructor(data) {
    super(data);
  }
  
  render() {
    const discountedPrice = this.data.price * (1 - this.data.discountPercentage / 100);
    
    return `
      <div class="product-card discount">
        <h2>${this.data.name}</h2>
        <p class="description">${this.data.description}</p>
        <div class="price-container">
          <p class="original-price">€${this.data.price.toFixed(2)}</p>
          <p class="discount-price">€${discountedPrice.toFixed(2)}</p>
          <span class="discount-badge">-${this.data.discountPercentage}%</span>
        </div>
        <button>Añadir al carrito</button>
      </div>
    `;
  }
}

// Clase para productos exclusivos
export class ExclusiveProduct extends ProductCard {
  constructor(data) {
    super(data);
  }
  
  render() {
    return `
      <div class="product-card exclusive">
        <span class="exclusive-badge">Exclusivo</span>
        <h2>${this.data.name}</h2>
        <p class="description">${this.data.description}</p>
        <p class="price">€${this.data.price.toFixed(2)}</p>
        <p class="stock">¡Solo quedan ${this.data.stock} unidades!</p>
        <button>Comprar ahora</button>
      </div>
    `;
  }
}

// Factory Method
export class ProductFactory {
  static createProductCard(type, data) {
    switch(type.toLowerCase()) {
      case 'standard':
        return new StandardProduct(data);
      case 'discount':
        return new DiscountProduct(data);
      case 'exclusive':
        return new ExclusiveProduct(data);
      default:
        throw new Error(`Tipo de producto no válido: ${type}`);
    }
  }
}

