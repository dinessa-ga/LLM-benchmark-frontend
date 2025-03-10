//One shot

// Clase base abstracta para tarjetas - Definición de Productos (Componentes de Tarjeta)
class Card {
  render() {
      throw new Error("Método render() no implementado");
  }
}

// Tarjeta para artículos
class ArticleCard extends Card {
  constructor(data) {
      super();
      this.data = data;
  }

  render() {
      const card = document.createElement("div");
      card.className = "card article";
      card.innerHTML = `
          <h2>${this.data.title}</h2>
          <p>${this.data.content}</p>
          <footer>Autor: ${this.data.author}</footer>
      `;
      return card;
  }
}

// Tarjeta para productos
class ProductCard extends Card {
  constructor(data) {
      super();
      this.data = data;
  }

  render() {
      const card = document.createElement("div");
      card.className = "card product";
      card.innerHTML = `
          <img src="${this.data.image}" alt="${this.data.name}" />
          <h3>${this.data.name}</h3>
          <p>$${this.data.price}</p>
          <button>Agregar al carrito</button>
      `;
      return card;
  }
}

// Tarjeta para perfiles
class ProfileCard extends Card {
  constructor(data) {
      super();
      this.data = data;
  }

  render() {
      const card = document.createElement("div");
      card.className = "card profile";
      card.innerHTML = `
          <div class="avatar">
              <img src="${this.data.avatar}" alt="${this.data.name}" />
          </div>
          <h3>${this.data.name}</h3>
          <p>${this.data.bio}</p>
          <ul>
              ${this.data.skills.map(skill => `<li>${skill}</li>`).join("")}
          </ul>
      `;
      return card;
  }
}

//Lo siguiente se creó en otra caja de código - Definición de Fábricas (Creators)

// Clase base abstracta para fábricas
class CardFactory {
  createCard(data) {
      throw new Error("Método createCard() no implementado");
  }
}

// Fábrica para tarjetas de artículos
class ArticleCardFactory extends CardFactory {
  createCard(data) {
      return new ArticleCard(data);
  }
}

// Fábrica para tarjetas de productos
class ProductCardFactory extends CardFactory {
  createCard(data) {
      return new ProductCard(data);
  }
}

// Fábrica para tarjetas de perfiles
class ProfileCardFactory extends CardFactory {
  createCard(data) {
      return new ProfileCard(data);
  }
}

//Otra caja de código - Función Helper para Seleccionar la Fábrica

function getCardFactory(type) {
  const factories = {
      article: ArticleCardFactory,
      product: ProductCardFactory,
      profile: ProfileCardFactory,
  };

  const FactoryClass = factories[type];
  if (!FactoryClass) throw new Error(`Tipo de tarjeta no soportado: ${type}`);
  
  return new FactoryClass();
}

// Otra caja de código - Función de Alto Nivel para Crear Tarjetas

function createCard(type, data) {
  const factory = getCardFactory(type); // Obtiene la fábrica concreta
  const card = factory.createCard(data); // Crea la tarjeta
  return card.render(); // Retorna el elemento DOM
}

