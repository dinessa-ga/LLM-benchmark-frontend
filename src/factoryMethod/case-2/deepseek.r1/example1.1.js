//1
// ProductCard y clases relacionadas
export class ProductCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error('Método render debe ser implementado por subclases');
  }
}

export class StandardProduct extends ProductCard {
  render() {
    return `
      <div class="product standard">
        <h2>${this.data.name}</h2>
        <p>Precio: $${this.data.price}</p>
        ${this.data.description ? `<p>${this.data.description}</p>` : ''}
      </div>
    `;
  }
}

export class DiscountProduct extends ProductCard {
  render() {
    const discountedPrice = this.data.price * (1 - this.data.discount);
    return `
      <div class="product discount">
        <h2>${this.data.name}</h2>
        <p class="old-price">Antes: $${this.data.price}</p>
        <p class="new-price">Ahora: $${discountedPrice.toFixed(2)}</p>
        <p>¡Descuento del ${(this.data.discount * 100).toFixed(0)}%!</p>
      </div>
    `;
  }
}

export class ExclusiveProduct extends ProductCard {
  render() {
    return `
      <div class="product exclusive">
        <h2>${this.data.name} ⭐</h2>
        <p>Precio exclusivo: $${this.data.price}</p>
        <p class="exclusive-message">Producto exclusivo para miembros premium</p>
      </div>
    `;
  }
}

export class ProductFactory {
  static createProductCard(type, data) {
    switch (type.toLowerCase()) {
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
