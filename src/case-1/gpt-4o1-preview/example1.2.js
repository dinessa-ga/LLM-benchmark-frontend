// 2

// ...existing code...

class Card {
  constructor(data) {
    this.data = data;
  }
  render() {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    return cardElement;
  }
}

class ArticleCard extends Card {
  render() {
    const cardElement = super.render();
    cardElement.innerHTML = `
      <h2>${this.data.title}</h2>
      <p>${this.data.content}</p>
    `;
    return cardElement;
  }
}

class ProductCard extends Card {
  render() {
    const cardElement = super.render();
    cardElement.innerHTML = `
      <h2>${this.data.name}</h2>
      <p>Precio: $${this.data.price}</p>
    `;
    return cardElement;
  }
}

class ProfileCard extends Card {
  render() {
    const cardElement = super.render();
    cardElement.innerHTML = `
      <h2>${this.data.username}</h2>
      <p>${this.data.bio}</p>
    `;
    return cardElement;
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
      throw new Error('Tipo de contenido no reconocido');
  }
}
// ...existing code...