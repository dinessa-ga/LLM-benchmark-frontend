//One shot

// Clase base para las tarjetas
class Card {
  constructor(data) {
      this.data = data;
  }
  render() {
      throw new Error("El método render() debe ser implementado por las subclases");
  }
}

// Tarjeta para artículos
class ArticleCard extends Card {
  render() {
      return `
          <div class="card article">
              <h2>${this.data.title}</h2>
              <p>${this.data.summary}</p>
              <a href="${this.data.link}">Leer más</a>
          </div>
      `;
  }
}

// Tarjeta para productos
class ProductCard extends Card {
  render() {
      return `
          <div class="card product">
              <h2>${this.data.name}</h2>
              <p>Precio: $${this.data.price}</p>
              <button>Comprar</button>
          </div>
      `;
  }
}

// Tarjeta para perfiles
class ProfileCard extends Card {
  render() {
      return `
          <div class="card profile">
              <h2>${this.data.name}</h2>
              <p>${this.data.bio}</p>
              <button>Seguir</button>
          </div>
      `;
  }
}

// Fábrica de tarjetas
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

// Ejemplo de uso
document.addEventListener("DOMContentLoaded", () => {
  const cardsData = [
      { type: "article", data: { title: "Artículo 1", summary: "Resumen del artículo", link: "#" } },
      { type: "product", data: { name: "Producto A", price: 25.99 } },
      { type: "profile", data: { name: "Juan Pérez", bio: "Desarrollador Frontend" } }
  ];
  
  const container = document.getElementById("card-container");
  cardsData.forEach(item => {
      const card = CardFactory.createCard(item.type, item.data);
      container.innerHTML += card.render();
  });
});
