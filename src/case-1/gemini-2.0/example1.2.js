// 2

// **1. Interfaces y Clases Abstractas**

/**
 * Interfaz para todas las tarjetas. Define el contrato que deben seguir las implementaciones.
 */
class Card {
  constructor(data) {
    if (new.target === Card) {
      throw new TypeError("La clase Card es abstracta y no puede ser instanciada directamente.");
    }
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado en las subclases.");
  }
}


// **2. Implementaciones Concretas de Tarjetas**

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
        <p>${this.data.summary}</p>
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
        <button>Comprar</button>
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
        <h4>${this.data.name}</h4>
        <p>${this.data.bio}</p>
        <a href="${this.data.profileUrl}">Ver perfil</a>
      </div>
    `;
  }
}



// **3. La Fábrica**

/**
 * La fábrica que crea los diferentes tipos de tarjetas.
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


// **4. Ejemplo de Uso**

// Datos de ejemplo
const articleData = {
  title: "El Futuro de la IA",
  summary: "Un análisis de las últimas tendencias en inteligencia artificial.",
  link: "/articulo/ia"
};

const productData = {
  name: "Laptop XYZ",
  price: 1200,
  imageUrl: "https://via.placeholder.com/150" // Reemplaza con la URL de la imagen
};

const profileData = {
  name: "Jane Doe",
  bio: "Desarrolladora de software apasionada.",
  avatarUrl: "https://via.placeholder.com/50", // Reemplaza con la URL del avatar
  profileUrl: "/perfil/jane-doe"
};


// Obtener el contenedor donde se insertarán las tarjetas



// Crear las tarjetas usando la fábrica
const articleCard = CardFactory.createCard('article', articleData);
const productCard = CardFactory.createCard('product', productData);
const profileCard = CardFactory.createCard('profile', profileData);

