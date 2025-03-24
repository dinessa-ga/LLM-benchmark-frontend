// 3

// -------------------- INTERFACES Y CLASES ABSTRACTAS --------------------

/**
 * Interfaz para todos los componentes de tarjeta.  Define el método `render`.
 */
class Card {
  constructor(data) {
    if (new.target === Card) {
      throw new Error("Card es una clase abstracta, no se puede instanciar directamente.");
    }
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado en las subclases.");
  }
}

// -------------------- CLASES CONCRETAS DE TARJETAS --------------------

/**
 * Tarjeta para mostrar artículos.
 */
class ArticleCard extends Card {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card article-card">
        <h2>${this.data.title}</h2>
        <p>${this.data.content}</p>
        <a href="${this.data.link}">Leer más</a>
      </div>
    `;
  }
}

/**
 * Tarjeta para mostrar productos.
 */
class ProductCard extends Card {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card product-card">
        <img src="${this.data.imageUrl}" alt="${this.data.name}">
        <h3>${this.data.name}</h3>
        <p>Precio: $${this.data.price}</p>
        <button>Añadir al carrito</button>
      </div>
    `;
  }
}

/**
 * Tarjeta para mostrar perfiles de usuario.
 */
class ProfileCard extends Card {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card profile-card">
        <img src="${this.data.avatarUrl}" alt="${this.data.name}">
        <h3>${this.data.name}</h3>
        <p>${this.data.bio}</p>
        <a href="${this.data.profileUrl}">Ver perfil</a>
      </div>
    `;
  }
}

// -------------------- LA FÁBRICA --------------------

/**
 * La fábrica de componentes de tarjetas.  Crea instancias de las tarjetas concretas basándose en el tipo especificado.
 */
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
        throw new Error(`Tipo de tarjeta desconocido: ${type}`);
    }
  }
}

// -------------------- EJEMPLO DE USO --------------------

// Datos de ejemplo
const articleData = {
  title: "Noticias sobre JavaScript",
  content: "Las últimas novedades del mundo de JavaScript.",
  link: "/noticias-js"
};

const productData = {
  name: "Curso de React",
  price: 99.99,
  imageUrl: "https://via.placeholder.com/150"
};

const profileData = {
  name: "Alice Smith",
  bio: "Frontend Developer",
  avatarUrl: "https://via.placeholder.com/50",
  profileUrl: "/alice-smith"
};

// Crear las tarjetas usando la fábrica
const articleCard = CardFactory.createCard('article', articleData);
const productCard = CardFactory.createCard('product', productData);
const profileCard = CardFactory.createCard('profile', profileData);

