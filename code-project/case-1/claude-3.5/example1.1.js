//Zero-shot

// Clase base para todos los tipos de tarjetas
class Card {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("El método render debe ser implementado por las clases hijas");
  }
}

// Implementación concreta para tarjetas de artículos
class ArticleCard extends Card {
  render() {
    const html = `
      <div class="card article-card">
        <div class="card-header">
          <h2>${this.data.title}</h2>
          <span class="date">${this.data.date}</span>
        </div>
        <div class="card-body">
          <p>${this.data.summary}</p>
        </div>
        <div class="card-footer">
          <span class="author">Por ${this.data.author}</span>
          <a href="${this.data.url}" class="btn-read">Leer más</a>
        </div>
      </div>
    `;
    return html;
  }
}

// Implementación concreta para tarjetas de productos
class ProductCard extends Card {
  render() {
    const html = `
      <div class="card product-card">
        <div class="card-image">
          <img src="${this.data.imageUrl}" alt="${this.data.name}">
        </div>
        <div class="card-body">
          <h3>${this.data.name}</h3>
          <p class="description">${this.data.description}</p>
          <div class="price">${this.data.price}</div>
        </div>
        <div class="card-footer">
          <button class="btn-add-cart" data-id="${this.data.id}">Añadir al carrito</button>
        </div>
      </div>
    `;
    return html;
  }
}

// Implementación concreta para tarjetas de perfiles
class ProfileCard extends Card {
  render() {
    const html = `
      <div class="card profile-card">
        <div class="card-header">
          <div class="avatar">
            <img src="${this.data.avatar}" alt="${this.data.name}">
          </div>
          <h3>${this.data.name}</h3>
          <p class="job-title">${this.data.jobTitle}</p>
        </div>
        <div class="card-body">
          <p>${this.data.bio}</p>
        </div>
        <div class="card-footer">
          <div class="social-links">
            ${this.renderSocialLinks()}
          </div>
          <button class="btn-contact" data-email="${this.data.email}">Contactar</button>
        </div>
      </div>
    `;
    return html;
  }

  renderSocialLinks() {
    return this.data.socialMedia
      .map(social => `<a href="${social.url}" class="social-icon ${social.network}"></a>`)
      .join('');
  }
}

// Fábrica que implementa el patrón Factory Method
class CardFactory {
  createCard(type, data) {
    switch (type) {
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

// Función de ayuda para renderizar tarjetas en el DOM
function renderCardToDOM(cardType, data, containerId) {
  const factory = new CardFactory();
  const card = factory.createCard(cardType, data);
  const container = document.getElementById(containerId);
  
  if (container) {
    container.innerHTML += card.render();
  } else {
    console.error(`Contenedor con ID ${containerId} no encontrado`);
  }
}