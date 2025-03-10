//Zero-shot

// Definimos la fábrica de tarjetas
class CardFactory {
  static createCard(type, data) {
      switch (type) {
          case 'article':
              return new ArticleCard(data);
          case 'product':
              return new ProductCard(data);
          case 'profile':
              return new ProfileCard(data);
          default:
              throw new Error('Tipo de tarjeta no válido');
      }
  }
}

// Definimos la clase base Card
class Card {
  constructor(data) {
      this.data = data;
  }
  render() {
      throw new Error('El método render debe ser implementado');
  }
}

// Tarjeta para artículos
class ArticleCard extends Card {
  render() {
      return `
          <div class="card article">
              <h2>${this.data.title}</h2>
              <p>${this.data.summary}</p>
              <a href="${this.data.link}">Leer más</a>
          </div>
      `;
  }
}

// Tarjeta para productos
class ProductCard extends Card {
  render() {
      return `
          <div class="card product">
              <h2>${this.data.name}</h2>
              <p>Precio: $${this.data.price}</p>
              <button>Comprar</button>
          </div>
      `;
  }
}

// Tarjeta para perfiles
class ProfileCard extends Card {
  render() {
      return `
          <div class="card profile">
              <h2>${this.data.name}</h2>
              <p>${this.data.bio}</p>
              <a href="${this.data.contact}">Contacto</a>
          </div>
      `;
  }
}

// Ejemplo de uso
document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");
  
  const article = CardFactory.createCard('article', {
      title: 'Nuevo JavaScript ES2024',
      summary: 'Descubre las nuevas características de JavaScript.',
      link: '#'
  });
  
  const product = CardFactory.createCard('product', {
      name: 'Laptop Gamer',
      price: 1200
  });
  
  const profile = CardFactory.createCard('profile', {
      name: 'Ana Pérez',
      bio: 'Desarrolladora web y entusiasta de la tecnología.',
      contact: '#'
  });
  
  cardsContainer.innerHTML = article.render() + product.render() + profile.render();
});