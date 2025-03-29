//1

class CardFactory {
  createCard(type, data) {
    switch (type.toLowerCase()) {
      case 'article':
        return this._createArticleCard(data);
      case 'product':
        return this._createProductCard(data);
      case 'profile':
        return this._createProfileCard(data);
      default:
        throw new Error(`Tipo de tarjeta no soportado: ${type}`);
    }
  }

  _createBaseCard() {
    const card = document.createElement('div');
    card.className = 'card';
    return card;
  }

  _createArticleCard(data) {
    const card = this._createBaseCard();
    card.innerHTML = `
      <div class="card-content article">
        <h3 class="title">${data.title}</h3>
        <p class="meta">Por ${data.author} - ${new Date(data.date).toLocaleDateString()}</p>
        <div class="excerpt">${data.excerpt}</div>
        <a href="${data.url}" class="read-more">Leer más</a>
      </div>
    `;
    return card;
  }

  _createProductCard(data) {
    const card = this._createBaseCard();
    card.innerHTML = `
      <div class="card-content product">
        <img src="${data.image}" alt="${data.name}" class="product-image">
        <h4 class="product-name">${data.name}</h4>
        <p class="product-price">${data.price.toFixed(2)} €</p>
        <p class="product-description">${data.description}</p>
        <button class="add-to-cart" data-id="${data.id}">Añadir al carrito</button>
      </div>
    `;
    return card;
  }

  _createProfileCard(data) {
    const card = this._createBaseCard();
    card.innerHTML = `
      <div class="card-content profile">
        <div class="profile-header">
          <img src="${data.avatar}" alt="${data.name}" class="avatar">
          <div class="profile-info">
            <h3 class="name">${data.name}</h3>
            <p class="title">${data.title}</p>
          </div>
        </div>
        <p class="bio">${data.bio}</p>
        <div class="social-links">
          ${data.socialLinks.map(link => `
            <a href="${link.url}" class="social-link" target="_blank">
              <i class="${link.icon}"></i>
            </a>
          `).join('')}
        </div>
      </div>
    `;
    return card;
  }
}

// Ejemplo de uso
const factory = new CardFactory();

// Crear tarjeta de artículo
const articleCard = factory.createCard('article', {
  title: 'Introducción a los Patrones de Diseño',
  author: 'Juan Pérez',
  date: '2023-03-15',
  excerpt: 'Aprende sobre los principales patrones de diseño...',
  url: '/blog/introduccion-patrones'
});

// Crear tarjeta de producto
const productCard = factory.createCard('product', {
  id: 123,
  name: 'Zapatillas Running',
  price: 89.99,
  description: 'Zapatillas deportivas para running de última generación',
  image: '/images/shoes.jpg'
});

// Crear tarjeta de perfil
const profileCard = factory.createCard('profile', {
  name: 'María García',
  title: 'Desarrolladora Frontend',
  avatar: '/avatars/maria.jpg',
  bio: 'Apasionada por crear experiencias web increíbles...',
  socialLinks: [
    { url: 'https://github.com/maria', icon: 'fab fa-github' },
    { url: 'https://linkedin.com/in/maria', icon: 'fab fa-linkedin' }
  ]
});

// Agregar tarjetas al DOM
document.getElementById('card-container').append(articleCard, productCard, profileCard);