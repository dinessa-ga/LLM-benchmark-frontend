//2

// Clase base para todos los componentes de tarjeta
class Card {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("El método render debe ser implementado por las clases hijas");
  }
}

// Implementación específica para tarjetas de artículos
class ArticleCard extends Card {
  render() {
    return `
      <div class="card article-card">
        <div class="card-header">
          <h2 class="card-title">${this.data.title}</h2>
          <span class="card-date">${this.data.date}</span>
        </div>
        <div class="card-body">
          <p class="card-summary">${this.data.summary}</p>
        </div>
        <div class="card-footer">
          <span class="card-author">Por: ${this.data.author}</span>
          <a href="${this.data.url}" class="card-link">Leer más</a>
        </div>
      </div>
    `;
  }
}

// Implementación específica para tarjetas de productos
class ProductCard extends Card {
  render() {
    return `
      <div class="card product-card">
        <div class="card-header">
          <img src="${this.data.image}" alt="${this.data.name}" class="product-image">
        </div>
        <div class="card-body">
          <h3 class="product-name">${this.data.name}</h3>
          <p class="product-description">${this.data.description}</p>
          <div class="product-price">${this.data.price}</div>
        </div>
        <div class="card-footer">
          <button class="add-to-cart-button" data-product-id="${this.data.id}">Añadir al carrito</button>
        </div>
      </div>
    `;
  }
}

// Implementación específica para tarjetas de perfiles
class ProfileCard extends Card {
  render() {
    return `
      <div class="card profile-card">
        <div class="card-header">
          <img src="${this.data.avatar}" alt="${this.data.name}" class="profile-avatar">
        </div>
        <div class="card-body">
          <h3 class="profile-name">${this.data.name}</h3>
          <p class="profile-bio">${this.data.bio}</p>
          <div class="profile-info">
            <span class="profile-location"><i class="icon-location"></i> ${this.data.location}</span>
            <span class="profile-email"><i class="icon-email"></i> ${this.data.email}</span>
          </div>
        </div>
        <div class="card-footer">
          <button class="connect-button" data-profile-id="${this.data.id}">Conectar</button>
        </div>
      </div>
    `;
  }
}

// Factory Method que crea las instancias de tarjetas según el tipo
class CardFactory {
  createCard(type, data) {
    switch (type.toLowerCase()) {
      case 'article':
        return new ArticleCard(data);
      case 'product':
        return new ProductCard(data);
      case 'profile':
        return new ProfileCard(data);
      default:
        throw new Error(`Tipo de tarjeta no soportado: ${type}`);
    }
  }
}

// Función de utilidad para renderizar tarjetas en el DOM
function renderCard(type, data, containerId) {
  const factory = new CardFactory();
  const card = factory.createCard(type, data);
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML += card.render();
  } else {
    console.error(`Contenedor con id ${containerId} no encontrado`);
  }
}

// Ejemplo de uso:
// renderCard('article', {
//   title: 'Cómo utilizar el patrón Factory Method',
//   date: '10/03/2025',
//   summary: 'Un tutorial sobre cómo implementar el patrón Factory Method en JavaScript...',
//   author: 'Juan Pérez',
//   url: '/blog/factory-method'
// }, 'articles-container');