// 2

// Interface base para las tarjetas
class Card {
  constructor(data) {
    if (new.target === Card) {
      throw new Error("Card es una clase abstracta y no puede ser instanciada");
    }
    this.data = data;
  }

  render() {
    throw new Error("Método render() debe ser implementado");
  }
}

// Implementaciones concretas
class ArticleCard extends Card {
  render() {
    const card = document.createElement('article');
    card.className = 'card article';
    card.innerHTML = `
      <header>
        <h2>${this.data.title}</h2>
        <div class="meta">
          <span>${this.data.author}</span>
          <time>${new Date(this.data.date).toLocaleDateString()}</time>
        </div>
      </header>
      <section class="content">${this.data.excerpt}</section>
      <footer>
        <a href="${this.data.url}" class="button">Leer artículo</a>
      </footer>
    `;
    return card;
  }
}

class ProductCard extends Card {
  render() {
    const card = document.createElement('div');
    card.className = 'card product';
    card.innerHTML = `
      <img src="${this.data.image}" alt="${this.data.name}">
      <div class="product-info">
        <h3>${this.data.name}</h3>
        <p class="price">${this.data.price.toFixed(2)}€</p>
        <p class="description">${this.data.description}</p>
        <button class="add-to-cart" data-id="${this.data.id}">
          Añadir al carrito
        </button>
      </div>
    `;
    return card;
  }
}

class ProfileCard extends Card {
  render() {
    const card = document.createElement('div');
    card.className = 'card profile';
    card.innerHTML = `
      <div class="profile-header">
        <img src="${this.data.avatar}" alt="${this.data.name}" class="avatar">
        <div class="profile-info">
          <h2>${this.data.name}</h2>
          <p class="title">${this.data.title}</p>
        </div>
      </div>
      <p class="bio">${this.data.bio}</p>
      <div class="social-links">
        ${this.data.socialLinks.map(link => `
          <a href="${link.url}" target="_blank" rel="noopener">
            <i class="${link.icon}"></i>
          </a>
        `).join('')}
      </div>
    `;
    return card;
  }
}

// Fábrica de componentes
class CardFactory {
  static create(type, data) {
    const cardTypes = {
      article: ArticleCard,
      product: ProductCard,
      profile: ProfileCard
    };

    const CardClass = cardTypes[type.toLowerCase()];
    if (!CardClass) throw new Error(`Tipo de tarjeta no válido: ${type}`);

    return new CardClass(data).render();
  }
}

// Uso de la fábrica

// Crear tarjeta de artículo
const articleData = {
  title: 'Patrones de Diseño Modernos',
  author: 'María López',
  date: '2024-03-20',
  excerpt: 'Explorando los últimos patrones de diseño...',
  url: '/blog/patrones-diseno'
};
container.appendChild(CardFactory.create('article', articleData));

// Crear tarjeta de producto
const productData = {
  id: 456,
  name: 'Cámara Profesional',
  price: 599.99,
  description: 'Cámara DSLR de 24MP con kit de lentes',
  image: '/images/camera.jpg'
};
container.appendChild(CardFactory.create('product', productData));

// Crear tarjeta de perfil
const profileData = {
  name: 'Carlos Martínez',
  title: 'Ingeniero Frontend',
  avatar: '/avatars/carlos.jpg',
  bio: 'Especialista en arquitecturas escalables...',
  socialLinks: [
    { url: 'https://twitter.com/carlos', icon: 'fab fa-twitter' },
    { url: 'https://github.com/carlos', icon: 'fab fa-github' }
  ]
};
container.appendChild(CardFactory.create('profile', profileData));