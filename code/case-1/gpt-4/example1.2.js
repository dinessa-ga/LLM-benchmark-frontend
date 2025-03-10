// Zero-shot CoT

// Fábrica de Componentes de Tarjeta
class CardFactory {
  static createCard(type, data) {
      switch (type) {
          case "article":
              return new ArticleCard(data);
          case "product":
              return new ProductCard(data);
          case "profile":
              return new ProfileCard(data);
          default:
              throw new Error("Tipo de tarjeta no soportado");
      }
  }
}

// Clase Base para Tarjetas
class CardComponent {
  constructor(data) {
      this.data = data;
  }
  render() {
      throw new Error("El método render() debe ser implementado");
  }
}

// Tarjeta de Artículo
class ArticleCard extends CardComponent {
  render() {
      return `
          <div class="card article">
              <h2>${this.data.title}</h2>
              <p>${this.data.description}</p>
              <span>${this.data.date}</span>
          </div>
      `;
  }
}

// Tarjeta de Producto
class ProductCard extends CardComponent {
  render() {
      return `
          <div class="card product">
              <img src="${this.data.image}" alt="${this.data.name}">
              <h2>${this.data.name}</h2>
              <p>Precio: $${this.data.price}</p>
              <button>Comprar</button>
          </div>
      `;
  }
}

// Tarjeta de Perfil
class ProfileCard extends CardComponent {
  render() {
      return `
          <div class="card profile">
              <img src="${this.data.avatar}" alt="${this.data.name}">
              <h2>${this.data.name}</h2>
              <p>${this.data.bio}</p>
          </div>
      `;
  }
}

// 🔹 Ejemplo de Uso
const articleData = {
  title: "Nueva Tecnología en IA",
  description: "Descubre cómo la IA está revolucionando el mundo.",
  date: "10 de marzo de 2025"
};

const productData = {
  name: "Laptop Gamer",
  price: 1299.99,
  image: "https://via.placeholder.com/150"
};

const profileData = {
  name: "Ana López",
  avatar: "https://via.placeholder.com/100",
  bio: "Desarrolladora web y entusiasta del código."
};

// Creación de tarjetas
const articleCard = CardFactory.createCard("article", articleData);
const productCard = CardFactory.createCard("product", productData);
const profileCard = CardFactory.createCard("profile", profileData);

// Renderizar en el DOM
document.body.innerHTML += articleCard.render();
document.body.innerHTML += productCard.render();
document.body.innerHTML += profileCard.render();
