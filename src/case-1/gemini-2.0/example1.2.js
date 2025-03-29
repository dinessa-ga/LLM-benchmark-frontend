// 2

// 1. Define una clase base para los componentes de tarjeta
class CardComponent {
  constructor(data) {
    if (new.target === CardComponent) {
      throw new Error("CardComponent es una clase abstracta, no se puede instanciar directamente");
    }
    this.data = data;
  }

  render() {
    throw new Error("El método render() debe ser implementado en las clases derivadas.");
  }
}

// 2. Crea clases específicas para cada tipo de tarjeta, heredando de la clase base
class ArticleCard extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card article-card">
        <h3>${this.data.title}</h3>
        <p>${this.data.summary}</p>
        <a href="${this.data.link}">Leer más</a>
      </div>
    `;
  }
}

class ProductCard extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card product-card">
        <img src="${this.data.imageUrl}" alt="${this.data.name}">
        <h4>${this.data.name}</h4>
        <p>Precio: $${this.data.price}</p>
        <button>Agregar al carrito</button>
      </div>
    `;
  }
}

class ProfileCard extends CardComponent {
  constructor(data) {
    super(data);
  }

  render() {
    return `
      <div class="card profile-card">
        <img src="${this.data.avatarUrl}" alt="${this.data.name}">
        <h4>${this.data.name}</h4>
        <p>${this.data.bio}</p>
        <a href="${this.data.profileLink}">Ver perfil</a>
      </div>
    `;
  }
}


// 3. Implementa la Factory
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
        throw new Error(`Tipo de tarjeta no soportado: ${type}`);
    }
  }
}

// 4. Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container'); // Asegúrate de tener un elemento con este ID en tu HTML

  // Datos de ejemplo
  const articleData = {
    title: 'Título del Artículo',
    summary: 'Un breve resumen del artículo.',
    link: '#'
  };

  const productData = {
    name: 'Producto Ejemplo',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150' // Reemplaza con una URL real
  };

  const profileData = {
    name: 'John Doe',
    bio: 'Desarrollador de software.',
    avatarUrl: 'https://via.placeholder.com/50', // Reemplaza con una URL real
    profileLink: '#'
  };

  // Crear tarjetas usando la Factory
  const articleCard = CardFactory.createCard('article', articleData);
  const productCard = CardFactory.createCard('product', productData);
  const profileCard = CardFactory.createCard('profile', profileData);


  // Renderizar y agregar las tarjetas al contenedor
  container.innerHTML = articleCard.render() + productCard.render() + profileCard.render();
});

//  Opcional:  Función para limpiar el contenedor y renderizar solo ciertas tarjetas.
function renderCards(type, dataArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpiar el contenedor

    dataArray.forEach(data => {
      try {
        const card = CardFactory.createCard(type, data);
        container.innerHTML += card.render();
      } catch (error) {
        console.error("Error creating card:", error);
      }
    });
}

//Ejemplo de uso de la función renderCards:
//const articles = [{title: 'Art 1', summary:'Sum 1', link: '#'}, {title: 'Art 2', summary:'Sum 2', link: '#'}];
//renderCards('article', articles, 'card-container');