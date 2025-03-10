// Zero-shot CoT

class CardFactory {
  static create(type, data) {
    switch (type) {
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

  static _createArticleCard(data) {
    const card = document.createElement('div');
    card.className = 'card article';
    card.innerHTML = `
      <h3 class="title">${data.title}</h3>
      <div class="meta">
        <span class="author">${data.author}</span>
        <time class="date">${new Date(data.date).toLocaleDateString()}</time>
      </div>
      <p class="excerpt">${data.excerpt}</p>
      <a href="${data.url}" class="read-more">Leer más →</a>
    `;
    return card;
  }

  static _createProductCard(data) {
    const card = document.createElement('div');
    card.className = 'card product';
    card.innerHTML = `
      <img src="${data.image}" alt="${data.name}" class="product-image">
      <h3 class="product-name">${data.name}</h3>
      <p class="product-price">${data.price.toFixed(2)} €</p>
      <button class="add-to-cart" data-id="${data.id}">🛒 Añadir al carrito</button>
    `;
    
    card.querySelector('.add-to-cart').addEventListener('click', () => {
      console.log('Producto añadido:', data.id);
      // Lógica para añadir al carrito
    });
    
    return card;
  }

  static _createProfileCard(data) {
    const card = document.createElement('div');
    card.className = 'card profile';
    card.innerHTML = `
      <div class="profile-header">
        <img src="${data.avatar}" alt="${data.name}" class="avatar">
        <div class="profile-info">
          <h3 class="name">${data.name}</h3>
          <p class="title">${data.title}</p>
        </div>
      </div>
      <p class="bio">${data.bio}</p>
      <div class="social-links">${
        data.social.map(link => `
          <a href="${link.url}" class="social-link" target="_blank">
            ${link.icon ? `<img src="${link.icon}" alt="${link.name}">` : link.name}
          </a>`
        ).join('')
      }</div>
    `;
    return card;
  }
}

// Ejemplo de uso
const articleCard = CardFactory.create('article', {
  title: 'Introducción a los Patrones de Diseño',
  author: 'María García',
  date: '2024-03-20',
  excerpt: 'Aprende los fundamentos de los principales patrones de diseño...',
  url: '/blog/patrones-diseño'
});

const productCard = CardFactory.create('product', {
  id: 1456,
  name: 'Zapatillas Running Pro',
  price: 89.99,
  image: '/images/shoes.jpg'
});

const profileCard = CardFactory.create('profile', {
  name: 'Carlos Martínez',
  title: 'Desarrollador Full Stack',
  avatar: '/avatars/carlos.jpg',
  bio: 'Apasionado por crear aplicaciones web modernas y eficientes.',
  social: [
    { name: 'GitHub', url: 'https://github.com/cmartinez', icon: '/icons/github.svg' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/cmartinez' }
  ]
});

// Agregar tarjetas al DOM
document.querySelector('#container').append(articleCard, productCard, profileCard);