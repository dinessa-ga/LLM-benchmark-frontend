//One shot

// Interfaz base para los componentes de tarjeta (producto abstracto)
class CardComponent {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado en las clases hijas.");
  }
}

// Componentes de tarjeta concretos (productos concretos)

class ArticleCardComponent extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card article-card">
        <h3>${this.data.title}</h3>
        <p>${this.data.excerpt}</p>
        <a href="${this.data.url}">Leer más</a>
      </div>
    `;
  }
}

class ProductCardComponent extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card product-card">
        <img src="${this.data.imageUrl}" alt="${this.data.name}">
        <h4>${this.data.name}</h4>
        <p>Precio: $${this.data.price}</p>
        <button>Añadir al carrito</button>
      </div>
    `;
  }
}

class ProfileCardComponent extends CardComponent {
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


// Factory (creador abstracto)
class CardComponentFactory {
  createCard(contentType, data) {
    throw new Error("El método createCard() debe ser implementado en las clases hijas.");
  }
}

// Concrete Factory (creador concreto)
class ConcreteCardComponentFactory extends CardComponentFactory {
  createCard(contentType, data) {
    switch (contentType) {
      case "article":
        return new ArticleCardComponent(data);
      case "product":
        return new ProductCardComponent(data);
      case "profile":
        return new ProfileCardComponent(data);
      default:
        throw new Error(`Tipo de contenido no soportado: ${contentType}`);
    }
  }
}

// Uso del patrón Factory Method
const factory = new ConcreteCardComponentFactory();

// Datos de ejemplo
const articleData = {
  title: "El Futuro de JavaScript",
  excerpt: "Una mirada profunda a las nuevas características de JavaScript y cómo cambiarán el desarrollo web.",
  url: "https://ejemplo.com/articulo-javascript"
};

const productData = {
  name: "Camiseta Algodón Premium",
  price: 25.99,
  imageUrl: "https://ejemplo.com/camiseta.jpg"
};

const profileData = {
  name: "Jane Doe",
  bio: "Desarrolladora frontend apasionada por la accesibilidad y la usabilidad.",
  avatarUrl: "https://ejemplo.com/jane-doe.jpg",
  profileUrl: "https://ejemplo.com/jane-doe-profile"
};


// Crear componentes de tarjeta
const articleCard = factory.createCard("article", articleData);
const productCard = factory.createCard("product", productData);
const profileCard = factory.createCard("profile", profileData);


// Renderizar los componentes en el DOM
const container = document.getElementById("card-container");
if (container) {
  container.innerHTML = `
    ${articleCard.render()}
    ${productCard.render()}
    ${profileCard.render()}
  `;
} else {
  console.error("No se encontró el elemento con el ID 'card-container'");
}


// Estilos CSS básicos (opcional, para la presentación de las tarjetas)
const style = document.createElement('style');
style.innerHTML = `
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .article-card {
    background-color: #f9f9f9;
  }

  .product-card {
    background-color: #f0f8ff; /* AliceBlue */
  }

  .product-card img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .profile-card {
    background-color: #fffaf0; /* FloralWhite */
  }

  .profile-card img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

`;
document.head.appendChild(style);