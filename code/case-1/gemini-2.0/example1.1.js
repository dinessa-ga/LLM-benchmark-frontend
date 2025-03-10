//Zero-shot

// ------------------- Interfaces y Clases Base -------------------

/**
 * Interfaz base para todos los componentes de tarjeta.
 */
class CardComponent {
  constructor(data) {
    if (new.target === CardComponent) {
      throw new Error("CardComponent es una clase abstracta y no puede ser instanciada directamente.");
    }
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado en las subclases.");
  }
}

// ------------------- Clases Concretas de Componentes de Tarjeta -------------------

/**
 * Componente de tarjeta para mostrar artículos.
 */
class ArticleCardComponent extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="article-card">
        <h3>${this.data.title}</h3>
        <p>${this.data.excerpt}</p>
        <a href="${this.data.url}">Leer más</a>
      </div>
    `;
  }
}

/**
 * Componente de tarjeta para mostrar productos.
 */
class ProductCardComponent extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="product-card">
        <img src="${this.data.imageUrl}" alt="${this.data.name}">
        <h4>${this.data.name}</h4>
        <p>Precio: $${this.data.price}</p>
        <button>Añadir al carrito</button>
      </div>
    `;
  }
}

/**
 * Componente de tarjeta para mostrar perfiles de usuario.
 */
class ProfileCardComponent extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="profile-card">
        <img src="${this.data.avatarUrl}" alt="${this.data.name}">
        <h4>${this.data.name}</h4>
        <p>${this.data.bio}</p>
        <a href="${this.data.profileUrl}">Ver perfil</a>
      </div>
    `;
  }
}

// ------------------- La Fábrica -------------------

/**
 * La fábrica que crea componentes de tarjeta basados en el tipo de contenido.
 */
class CardComponentFactory {
  static createCard(type, data) {
    switch (type) {
      case 'article':
        return new ArticleCardComponent(data);
      case 'product':
        return new ProductCardComponent(data);
      case 'profile':
        return new ProfileCardComponent(data);
      default:
        throw new Error(`Tipo de tarjeta no soportado: ${type}`);
    }
  }
}

// ------------------- Ejemplo de Uso -------------------

// Datos de ejemplo
const articleData = {
  title: "Título del Artículo",
  excerpt: "Un breve resumen del artículo.",
  url: "/articulo-ejemplo"
};

const productData = {
  name: "Producto Ejemplo",
  price: 25.99,
  imageUrl: "https://via.placeholder.com/150"
};

const profileData = {
  name: "Juan Pérez",
  bio: "Desarrollador Front-end",
  avatarUrl: "https://via.placeholder.com/50",
  profileUrl: "/juan-perez"
};

// Crear componentes de tarjeta usando la fábrica
const articleCard = CardComponentFactory.createCard('article', articleData);
const productCard = CardComponentFactory.createCard('product', productData);
const profileCard = CardComponentFactory.createCard('profile', profileData);

// Renderizar los componentes en el DOM
const container = document.getElementById('card-container');
container.innerHTML = `
  ${articleCard.render()}
  ${productCard.render()}
  ${profileCard.render()}
`;

// ------------------- Estilos CSS (opcional) -------------------

/*
  Añade este CSS para que las tarjetas se vean mejor.  Puedes incluirlo en una etiqueta <style> dentro de tu HTML o en un archivo CSS separado.
*/
const styles = `
  .article-card, .product-card, .profile-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }

  .product-card img, .profile-card img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

// Agrega los estilos al head del documento (opcional)
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);