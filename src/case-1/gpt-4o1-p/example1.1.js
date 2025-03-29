// 1

class Card {
  constructor(data) {
    this.data = data;
  }
  render() {
    return '<div>Tarjeta base</div>';
  }
}

class ArticleCard extends Card {
  render() {
    return `<div>Artículo: ${this.data.title}</div>`;
  }
}

class ProductCard extends Card {
  render() {
    return `<div>Producto: ${this.data.name}</div>`;
  }
}

class ProfileCard extends Card {
  render() {
    return `<div>Perfil: ${this.data.username}</div>`;
  }
}

export function createCard(type, data) {
  switch (type) {
    case 'article':
      return new ArticleCard(data);
    case 'product':
      return new ProductCard(data);
    case 'profile':
      return new ProfileCard(data);
    default:
      throw new Error('Tipo de contenido no soportado');
  }
}