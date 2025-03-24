// 3

// Definición de tipos
const CardType = {
  ARTICLE: 'article',
  PRODUCT: 'product',
  PROFILE: 'profile'
};

// Clase base abstracta para tarjetas
class CardComponent {
  constructor(data) {
    if (this.constructor === CardComponent) {
      throw new Error('No se puede instanciar la clase abstracta CardComponent');
    }
    this.data = this.validateData(data);
  }

  validateData(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Datos inválidos para la tarjeta');
    }
    return data;
  }

  createElement(tag, classes, content) {
    const element = document.createElement(tag);
    if (classes) element.className = classes;
    if (content) element.innerHTML = content;
    return element;
  }

  render() {
    throw new Error('Método render debe ser implementado por subclases');
  }
}

// Implementaciones concretas
class ArticleCard extends CardComponent {
  render() {
    const card = this.createElement('article', 'card article');
    
    const header = this.createElement('header', 'card-header');
    header.innerHTML = `
      <h2>${this.data.title}</h2>
      <div class="meta">
        <span class="author">${this.data.author}</span>
        <time>${new Date(this.data.publishDate).toLocaleDateString()}</time>
      </div>
    `;

    const content = this.createElement('div', 'card-content');
    content.textContent = this.data.excerpt;

    const footer = this.createElement('footer', 'card-footer');
    footer.appendChild(
      this.createElement('a', 'btn read-more', 'Leer más').also(el => {
        el.href = this.data.url;
      })
    );

    card.append(header, content, footer);
    return card;
  }
}

class ProductCard extends CardComponent {
  render() {
    const card = this.createElement('div', 'card product');
    
    const image = this.createElement('img', 'product-image');
    image.src = this.data.imageUrl;
    image.alt = this.data.name;

    const body = this.createElement('div', 'card-body');
    body.innerHTML = `
      <h3>${this.data.name}</h3>
      <p class="price">$${this.data.price.toFixed(2)}</p>
      <p class="description">${this.data.description}</p>
    `;

    const button = this.createElement('button', 'btn add-to-cart');
    button.textContent = 'Añadir al carrito';
    button.dataset.productId = this.data.id;

    card.append(image, body, button);
    return card;
  }
}

class ProfileCard extends CardComponent {
  render() {
    const card = this.createElement('div', 'card profile');
    
    const profileHeader = this.createElement('div', 'profile-header');
    profileHeader.innerHTML = `
      <img src="${this.data.avatar}" alt="${this.data.name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${this.data.name}</h2>
        <p class="title">${this.data.title}</p>
      </div>
    `;

    const bio = this.createElement('p', 'profile-bio');
    bio.textContent = this.data.bio;

    const socialLinks = this.createElement('div', 'social-links');
    this.data.socials.forEach(social => {
      const link = this.createElement('a', 'social-link');
      link.href = social.url;
      link.innerHTML = `<i class="${social.iconClass}"></i>`;
      socialLinks.appendChild(link);
    });

    card.append(profileHeader, bio, socialLinks);
    return card;
  }
}

// Fábrica de componentes
class CardFactory {
  static create(type, data) {
    const creators = {
      [CardType.ARTICLE]: data => new ArticleCard(data),
      [CardType.PRODUCT]: data => new ProductCard(data),
      [CardType.PROFILE]: data => new ProfileCard(data)
    };

    const creator = creators[type.toLowerCase()];
    if (!creator) throw new Error(`Tipo de tarjeta no soportado: ${type}`);

    return creator(data).render();
  }
}

// Ejemplo de uso en una aplicación


// Crear tarjetas
const articleCard = CardFactory.create(CardType.ARTICLE, {
  title: 'Nuevos Patrones de Diseño Web',
  author: 'Ana Torres',
  publishDate: '2024-01-15',
  excerpt: 'Explorando las últimas tendencias en desarrollo frontend...',
  url: '/articulos/patrones-diseno'
});

const productCard = CardFactory.create(CardType.PRODUCT, {
  id: 'prod-123',
  name: 'Smartwatch Pro',
  price: 199.99,
  description: 'Reloj inteligente con monitor de salud avanzado',
  imageUrl: '/images/smartwatch.jpg'
});

const profileCard = CardFactory.create(CardType.PROFILE, {
  name: 'Carlos Gómez',
  title: 'Ingeniero de Software Senior',
  avatar: '/avatars/carlos.jpg',
  bio: 'Especialista en arquitecturas escalables y sistemas distribuidos...',
  socials: [
    { url: 'https://github.com/carlos', iconClass: 'fab fa-github' },
    { url: 'https://linkedin.com/in/carlos', iconClass: 'fab fa-linkedin' }
  ]
});

// Agregar al DOM
[articleCard, productCard, profileCard].forEach(card => {
  appContainer.appendChild(card);
});