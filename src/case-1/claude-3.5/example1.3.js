//3

// Clase abstracta CardFactory (Creador)
class CardFactory {
  // Método fábrica abstracto
  createCard(data) {
    throw new Error("El método createCard debe ser implementado por las subclases");
  }

  // Método que utiliza el componente creado
  renderCard(data) {
    const card = this.createCard(data);
    document.body.appendChild(card.render());
    return card;
  }
}

// Creadores concretos para diferentes tipos de tarjetas
class ArticleCardFactory extends CardFactory {
  createCard(data) {
    return new ArticleCard(data);
  }
}

class ProductCardFactory extends CardFactory {
  createCard(data) {
    return new ProductCard(data);
  }
}

class ProfileCardFactory extends CardFactory {
  createCard(data) {
    return new ProfileCard(data);
  }
}

// Clase base para todos los tipos de tarjetas (Producto)
class Card {
  constructor(data) {
    this.data = data;
  }

  render() {
    throw new Error("El método render debe ser implementado por las subclases");
  }

  createBasicCardElement(className) {
    const cardElement = document.createElement('div');
    cardElement.className = `card ${className}`;
    return cardElement;
  }
}

// Productos concretos - Diferentes tipos de tarjetas
class ArticleCard extends Card {
  render() {
    const cardElement = this.createBasicCardElement('article-card');
    
    const title = document.createElement('h2');
    title.textContent = this.data.title;
    
    const author = document.createElement('p');
    author.className = 'author';
    author.textContent = `Por: ${this.data.author}`;
    
    const excerpt = document.createElement('p');
    excerpt.className = 'excerpt';
    excerpt.textContent = this.data.excerpt;
    
    const readMore = document.createElement('a');
    readMore.href = this.data.url;
    readMore.textContent = 'Leer más';
    readMore.className = 'btn';
    
    cardElement.appendChild(title);
    cardElement.appendChild(author);
    cardElement.appendChild(excerpt);
    cardElement.appendChild(readMore);
    
    return cardElement;
  }
}

class ProductCard extends Card {
  render() {
    const cardElement = this.createBasicCardElement('product-card');
    
    const img = document.createElement('img');
    img.src = this.data.imageUrl;
    img.alt = this.data.name;
    
    const name = document.createElement('h3');
    name.textContent = this.data.name;
    
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${this.data.price.toFixed(2)}`;
    
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.className = 'buy-btn';
    buyButton.onclick = () => alert(`Producto añadido: ${this.data.name}`);
    
    cardElement.appendChild(img);
    cardElement.appendChild(name);
    cardElement.appendChild(price);
    cardElement.appendChild(buyButton);
    
    return cardElement;
  }
}

class ProfileCard extends Card {
  render() {
    const cardElement = this.createBasicCardElement('profile-card');
    
    const avatar = document.createElement('img');
    avatar.src = this.data.avatarUrl;
    avatar.alt = this.data.name;
    avatar.className = 'avatar';
    
    const name = document.createElement('h3');
    name.textContent = this.data.name;
    
    const role = document.createElement('p');
    role.className = 'role';
    role.textContent = this.data.role;
    
    const bio = document.createElement('p');
    bio.className = 'bio';
    bio.textContent = this.data.bio;
    
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contactar';
    contactButton.className = 'contact-btn';
    contactButton.onclick = () => window.location.href = `mailto:${this.data.email}`;
    
    cardElement.appendChild(avatar);
    cardElement.appendChild(name);
    cardElement.appendChild(role);
    cardElement.appendChild(bio);
    cardElement.appendChild(contactButton);
    
    return cardElement;
  }
}

// Función que actúa como punto de entrada principal para crear tarjetas
function createCardFactory(type) {
  switch(type) {
    case 'article':
      return new ArticleCardFactory();
    case 'product':
      return new ProductCardFactory();
    case 'profile':
      return new ProfileCardFactory();
    default:
      throw new Error(`Tipo de tarjeta desconocido: ${type}`);
  }
}

// Ejemplo de uso
function displayCard(type, data) {
  const factory = createCardFactory(type);
  return factory.renderCard(data);
}

// Ejemplos de datos para probar
const articleData = {
  title: "Cómo aplicar el patrón Factory Method",
  author: "Juan Pérez",
  excerpt: "Los patrones de diseño son soluciones probadas a problemas comunes en el desarrollo de software...",
  url: "/articulos/factory-method"
};

const productData = {
  name: "Laptop Pro",
  price: 1299.99,
  imageUrl: "/images/laptop.jpg"
};

const profileData = {
  name: "María García",
  role: "Desarrolladora Frontend",
  bio: "Especialista en JavaScript y patrones de diseño, con 5 años de experiencia...",
  avatarUrl: "/images/maria.jpg",
  email: "maria@ejemplo.com"
};

// Para usar en el código:
// displayCard('article', articleData);
// displayCard('product', productData);
// displayCard('profile', profileData);